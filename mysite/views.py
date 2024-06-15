import datetime
import heapq
from pyexpat.errors import messages
from django import forms
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth import authenticate, login, logout
from mysite.forms import CustomUserCreationForm
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action, api_view
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import bcrypt
from .models import *
from .serializers import *
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash
from rest_framework.decorators import api_view, permission_classes

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@csrf_exempt
@api_view(['POST'])
@permission_classes([])
def signup(request):
    print("Received data:", request.data)  # 수신한 데이터 출력
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
    else:
        print("Errors:", serializer.errors)  # 오류 메시지 출력
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['put'], permission_classes=[IsAuthenticated])
    def update_profile(self, request):
        user = request.user
        serializer = self.get_serializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(UserSerializer(user).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    
class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer   

class PlaceTypeViewSet(viewsets.ModelViewSet):
    queryset = PlaceType.objects.all()
    serializer_class = PlaceTypeSerializer  

class PlaceKeywordViewSet(viewsets.ModelViewSet):
    queryset = PlaceKeyword.objects.all()
    serializer_class = PlaceKeywordSerializer    

class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    serializer_class = RegionSerializer 

class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

class TestQViewSet(viewsets.ModelViewSet):
    queryset = TestQ.objects.all()
    serializer_class = TestQSerializer 

class KeywordViewSet(viewsets.ModelViewSet):
    queryset = Keyword.objects.all()
    serializer_class = KeywordSerializer 

class UserKeywordViewSet(viewsets.ModelViewSet):
    queryset = UserKeyword.objects.all()
    serializer_class = UserKeywordSerializer 

# 회원 탈퇴
@login_required
def delete_user(request):
    if request.method == 'POST':
        request.user.delete()
        return redirect('main_view')
    else:
        return render(request, 'mypage8_2.html')

# 로그인
@csrf_exempt
@api_view(['POST'])
def user_login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'message': '로그인 성공'}, status=200)
    else:
        return JsonResponse({'error': 'Invalid credentials'}, status=401)

# 로그아웃
@login_required
def user_logout(request):
    logout(request)
    return redirect('main_view')

# 회원 정보 조회 및 수정
@login_required
def user_profile(request):
    user = request.user
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST, instance=user)
        password_form = PasswordChangeForm(user, request.POST)
        if form.is_valid() and password_form.is_valid():
            user = form.save(commit=False)
            user.username = form.cleaned_data['username']
            user.email = form.cleaned_data['email']
            user.profile.profile_pic = request.FILES.get('profile_image')
            user.profile.gender = form.cleaned_data['gender']
            user.profile.birthday = form.cleaned_data['birthday']
            user.save()  
            new_password = password_form.cleaned_data['new_password1']
            if new_password:
                user.set_password(new_password)
                user.save()
                update_session_auth_hash(request, user)
                messages.success(request, '회원 정보가 업데이트되었습니다.')
                return redirect('profile')
        else:
            form = CustomUserCreationForm(instance=user)
            password_form = PasswordChangeForm(user)
        return render(request, 'user_profile.html', {'user': user, 'form': form, 'password_form': password_form})
    else:
        form = CustomUserCreationForm(instance=user)
        password_form = PasswordChangeForm(user)
        return render(request, 'user_profile.html', {'user': user, 'form': form, 'password_form': password_form})

# 여행 기간 선택 폼
class TripDurationForm(forms.Form):
    start_date = forms.DateField(label = "여행 시작일")
    end_date = forms.DateField(label = "여행 종료일")

# Dijkstra 알고리즘 - 최단 경로 계산
def dijkstra(graph, start):
    distances = {node: float('infinity') for node in graph}  # 모든 노드의 최단 경로 거리, 무한대로 초기화
    distances[start] = 0  # 시작 노드의 최단 경로 거리 0으로 설정
    priority_queue = [(0, start)]  # 우선순위 큐 생성, 시작 노드 추가
    
    while priority_queue:
        current_distance, current_node = heapq.heappop(priority_queue)
        if current_distance > distances[current_node]:  # 발견된 최단 거리보다 크면 무시
            continue
        
        for neighbor, weight in graph[current_node].items():  
            distance = current_distance + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
    
    return distances

# 최단 경로 순서대로 여행지 정렬 및 반환
def calculate_shortest_path(places):
    graph = {}
    for place in places:
        graph[place.id] = {}
        for neighbor in place.neighbors.all():
            graph[place.id][neighbor.id] = place.distance_to(neighbor)
    
    start_place = places[0]
    distances = dijkstra(graph, start_place.id)
    sorted_places = sorted(places, key=lambda place: distances[place.id])
    return sorted_places

def main_view(request):
    if request.method == 'POST':
        step = request.POST.get('step')
        
        if step == '1':
            region_id = request.POST.get('region')
            request.session['region_id'] = region_id
            return redirect('main_view')
        
        elif step == '2':
            start_date = request.POST.get('start_date')
            end_date = request.POST.get('end_date')
            request.session['start_date'] = start_date
            request.session['end_date'] = end_date
            return redirect('main_view')
        
        elif step == '3':
            place_type_id = request.POST.get('type')
            request.session['place_type_id'] = place_type_id
            return redirect('main_view')
        
        elif step == '4':
            selected_keywords = request.POST.getlist('keywords')
            request.session['keywords'] = selected_keywords
            return redirect('main_view')
    
    region_id = request.session.get('region_id')
    start_date = request.session.get('start_date')
    end_date = request.session.get('end_date')
    place_type_id = request.session.get('place_type_id')
    selected_keywords = request.session.get('keywords')
    if not region_id:
        regions = Region.objects.all()
        return render(request, 'place_select.html', {'regions': regions, 'step': 1})
    
    elif not start_date or not end_date:
        return render(request, 'trip_duration_select.html', {'step': 2})
    
    elif not place_type_id:
        place_types = PlaceType.objects.all()
        return render(request, 'type_select.html', {'place_types': place_types, 'step': 3})
    
    elif not selected_keywords:
        keywords = Keyword.objects.filter(placekeywords__type_id=place_type_id).distinct()
        return render(request, 'keyword_select.html', {'keywords': keywords, 'step': 4})
    else:
        start_date = datetime.strptime(start_date, '%Y-%m-%d')
        end_date = datetime.strptime(end_date, '%Y-%m-%d')
        num_days = (end_date - start_date).days + 1
        num_places_to_show = num_days * 3 + (num_days - 1)
        
        places = Place.objects.filter(
            region_id=region_id,
            type_id=place_type_id,
            placekeywords__kw_id__in=selected_keywords
        ).distinct()[:num_places_to_show]
        sorted_places = calculate_shortest_path(places)
        map_markers = [{'lat': place.latitude, 'lng': place.longitude, 'name': place.name} for place in sorted_places]
        return render(request, 'map.html', {
            'map_markers': map_markers,
            'places': sorted_places,
        })

# 여행지 세부 정보
def place_detail(request, place_id):
    place = get_object_or_404(Place, place_id=place_id)
    is_liked = False
    if request.user.is_authenticated:
        if Like.objects.filter(id=request.user, place_id=place).exists():
            is_liked = True
    return render(request, 'place_detail.html', {'place': place, 'is_liked': is_liked})

# '좋아요' 기능
@login_required
def like_place(request, place_id):
    if request.method == 'POST':
        place = Place.objects.get(pk=place_id)
        if not Like.objects.filter(user=request.user, place=place).exists():
            Like.objects.create(user=request.user, place=place)
            return JsonResponse({'message': "'좋아요' 저장!"})
        else:
            return JsonResponse({'message': "이미 '좋아요'를 누른 항목입니다."})

# '좋아요' 목록 조회
@login_required
def view_likes(request):
    liked_place = Like.objects.filter(id=request.user) 
    return render(request, 'view_likes.html', {'liked_place': liked_place})

# '좋아요' 삭제
@login_required
def unlike_place(request, place_id):
    if request.method == 'POST':
        place = Place.objects.get(pk=place_id)
        Like.objects.filter(id=request.user, place_id=place).delete()
        return JsonResponse({'message': "'좋아요'가 삭제되었습니다."})

