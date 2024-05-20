import datetime
from pyexpat.errors import messages
from django import forms
from django.http import JsonResponse # type: ignore
from django.contrib.auth.decorators import login_required # type: ignore
from django.shortcuts import get_object_or_404, redirect, render # type: ignore
from django.contrib.auth import authenticate, login, logout # type: ignore
from mysite.forms import CustomUserCreationForm
from rest_framework import viewsets
from .models import *
from .serializers import *
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash
import bcrypt

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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
   serializer_class = PlaceSerializer    

class RegionViewSet(viewsets.ModelViewSet):
   queryset = Region.objects.all()
   serializer_class = RegionSerializer 

class LikeViewSet(viewsets.ModelViewSet):
   queryset = Like.objects.all()
   serializer_class = LikeSerializer 

class TestQViewSet(viewsets.ModelViewSet):
   queryset = TestQ.objects.all()
   serializer_class = TestQSerializer 

class KeywordViewSet(viewsets.ModelViewSet):
   queryset = Keyword.objects.all()
   serializer_class = KeywordSerializer 

class UserKeywordViewSet(viewsets.ModelViewSet):
   queryset = UserKeyword.objects.all()
   serializer_class = UserKeywordSerializer 


# 회원 가입
def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save(commit=False)
            password = form.cleaned_data['password1']
            # 비밀번호 암호화
            hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
            user.set_password(hashed_password)
            user.save()
            login(request, user)
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})
        

# 회원 탈퇴
@login_required
def delete_user(request):
    if request.method == 'POST':
        request.user.delete()
        return redirect('home')
    else:
        return render(request, 'mypage8_2.html')


# 로그인
def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        # 암호화된 비밀번호로 사용자 인증
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    else:
        return render(request, 'login.html')
    

# 로그아웃
@login_required
def user_logout(request):
    logout(request)
    return redirect('home')


# 회원 정보 조회 및 수정
# '마이페이지' -> '내 정보'
# '수정하기' 버튼 클릭 시 정보 수정 가능
@login_required
def user_profile(request):
    user = request.user
    '''
    if request.method == 'POST':
        user.userid = request.POST.get('user_id')
        user.username = request.POST.get('username')
        user.email = request.POST.get('email')
        user.profile.profile_image_url = request.FILES.get('profile_image')
        user.profile.gender = request.POST.get('gender')
        user.profile.user_birth = request.POST.get('birthday')
        user.save()
        return redirect('profile')
    return render(request, 'user_profile.html', {'user': user})
    '''
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

            # 비밀번호 변경
            new_password = password_form.cleaned_data['new_password1']
            if new_password:
                user.set_password(new_password)
                user.save()
                # 세션 인증 업데이트
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


def main_view(request):
    if request.method == 'POST':
        step = request.POST.get('step')
        
        if step == '1':  # 여행지 선택
            region_id = request.POST.get('region')
            request.session['region_id'] = region_id
            return redirect('main_view')
        
        elif step == '2':  # 여행 기간 선택
            start_date = request.POST.get('start_date')
            end_date = request.POST.get('end_date')
            request.session['start_date'] = start_date
            request.session['end_date'] = end_date
            return redirect('main_view')
        
        elif step == '3':  # 여행 타입 선택
            place_type_id = request.POST.get('type')
            request.session['place_type_id'] = place_type_id
            return redirect('main_view')
        
        elif step == '4':  # 타입별 키워드 선택
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

        map_markers = [{'lat': place.latitude, 'lng': place.longitude, 'name': place.name} for place in places]

        return render(request, 'map.html', {
            'map_markers': map_markers,
            'places': places,
        })


# 여행지 세부 정보
def place_detail(request, place_id):
    place = get_object_or_404(Place, place_id=place_id)
    is_liked = False
    if request.user.is_authenticated:
        if Like.objects.filter(user_id=request.user, place_id=place).exists():
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
    liked_place = Like.objects.filter(user_id=request.user) 
    return render(request, 'view_likes.html', {'liked_place': liked_place})


# '좋아요' 삭제
@login_required
def unlike_place(request, place_id):
    if request.method == 'POST':
        place = Place.objects.get(pk=place_id)
        Like.objects.filter(user_id=request.user, place_id=place).delete()
        return JsonResponse({'message': "'좋아요'가 삭제되었습니다."})
    


'''
# 여행지 선택
def place_list(request):
    places = Place.objects.all()
    regions = Region.objects.all()
    place_types = PlaceType.objects.all()

    if request.method == 'POST':
        selected_region = request.POST.get('region')
        selected_type = request.POST.get('place_type')
        selected_keywords = request.POST.getlist('keywords')
        filtered_places = places
        if selected_region:
            filtered_places = filtered_places.filter(region_id__region_addr=selected_region)
        if selected_type:
            filtered_places = filtered_places.filter(type_id__type_name=selected_type)
        if selected_keywords:
            filtered_places = filtered_places.filter(place_name__in=selected_keywords)
        return render(request, 'place_list.html', {'places': filtered_places, 'regions': regions, 'place_types': place_types})
    return render(request, 'place_list.html', {'places': places, 'regions': regions, 'place_types': place_types})



# 여행 지역 선택
def place_select(request):
    if request.method == 'POST':
        selected_region = request.POST.get('region')
        if selected_region:
            # 선택된 지역에 해당하는 여행지 타입 목록 가져오기
            place_types = PlaceType.objects.filter(place__region_id__region_addr=selected_region).distinct()
            return render(request, 'place_select.html', {'place_types': place_types})
    # 모든 지역의 목록을 보여주기
    regions = Region.objects.all()
    return render(request, 'place_select.html', {'regions': regions})


# 여행지 타입(place_type) 선택
def type_select(request):
    if request.method == 'POST':
        selected_type = request.POST.get('type')
        if selected_type:
            # 선택된 타입에 해당하는 contents 가져오기
            testq_contents = TestQ.objects.filter(placekeywords__type_id__type_name=selected_type).distinct()
            # 해당 타입의 keyword 목록 가져오기
            keywords = Keyword.objects.filter(place_keywords__type_id__type_name=selected_type).distinct()
            return render(request, 'type_select.html', {'testq_contents': testq_contents, 'keywords': keywords})
    return render(request, 'type_select.html', {})


# 선택한 타입 별 키워드(place_keyword) 선택
def keyword_select(request):
    if request.method == 'POST':
        selected_keywords = request.POST.getlist('keywords')
        if selected_keywords:
            # 선택된 keyword에 해당하는 contents 가져오기
            testq_contents = TestQ.objects.filter(placekeywords__kw_id__kw_name__in=selected_keywords).distinct()
            # 선택된 keyword들에 해당하는 places 가져오기
            places = Place.objects.filter(placekeywords__kw_id__kw_name__in=selected_keywords).distinct()
            return render(request, 'keyword_select.html', {'testq_contents': testq_contents, 'places': places})
    return render(request, 'keyword_select.html', {})


# 여행지 목록 조회
def place_list(request):
    places = Place.objects.all()
    regions = Region.objects.all()
    place_types = PlaceType.objects.all()

    # 여행 기간 선택 폼 생성
    trip_duration_form = TripDurationForm(request.POST or None)

    if request.method == 'POST':
        # 여행 기간 폼 유효성 검사
        if trip_duration_form.is_valid():
            start_date = trip_duration_form.cleaned_data['start_date']
            end_date = trip_duration_form.cleaned_data['end_date']

            # 선택한 여행 기간에 따라 여행지 목록 필터링
            filtered_places = places.filter(suitable_for__gte=start_date, suitable_for__lte=end_date)
            num_days = (end_date - start_date).days + 1
            num_places_to_show = num_days * 3 + (num_days - 1)
            filtered_places = filtered_places[:num_places_to_show]

            # 여행지 목록과 여행 기간 폼을 템플릿에 전달
            return render(request, 'place_list.html', {'places': filtered_places, 'regions': regions, 'place_types': place_types, 'trip_duration_form': trip_duration_form})
    else:
        # 여행 기간 폼과 여행지 목록을 템플릿에 전달
        return render(request, 'place_list.html', {'places': places, 'regions': regions, 'place_types': place_types, 'trip_duration_form': trip_duration_form})


# 여행지 목록을 지도에 표시
def show_places_on_map(request):
    # 여행 기간 선택 폼 생성
    trip_duration_form = TripDurationForm(request.POST or None)

    if request.method == 'POST':
        # 여행 기간 폼 유효성 검사
        if trip_duration_form.is_valid():
            start_date = trip_duration_form.cleaned_data['start_date']
            end_date = trip_duration_form.cleaned_data['end_date']

            # 선택한 여행 기간에 따라 여행지 목록 필터링
            filtered_places = Place.objects.filter(suitable_for__gte=start_date, suitable_for__lte=end_date)
            num_days = (end_date - start_date).days + 1
            num_places_to_show = num_days * 3 + (num_days - 1)
            filtered_places = filtered_places[:num_places_to_show]

            # 필터링된 추천 여행지를 지도에 표시
            map_markers = [{'lat': place.latitude, 'lng': place.longitude} for place in filtered_places]
            return render(request, 'map.html', {'map_markers': map_markers})
    
    return render(request, 'map.html', {'trip_duration_form': trip_duration_form})
'''
