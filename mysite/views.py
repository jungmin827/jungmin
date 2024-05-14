from tkinter import Place
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth import authenticate, login, logout
from .forms import CustomUserCreationForm
from .models import Like, PlaceType, Region
def home(request):
    return render(request, 'home.html')
# 회원 가입
def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})
        

# 회원 탈퇴
@login_required
def delete_user(request):
    if request.method == 'POST':
        # Add confirmation logic if needed
        request.user.delete()
        return redirect('home')
        # return JsonResponse({'success': '회원 탈퇴가 완료되었습니다.'})
    else:
        return render(request, 'delete_user.html')


# 로그인
def user_login(request):
    if request.method == 'POST':
        user_id = request.POST.get('user_id')
        user_pw = request.POST.get('user_pw')
        user = authenticate(request, user_id=user_id, password=user_pw)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'login.html', {'error': '아이디 또는 비밀번호가 일치하지 않습니다.'})
    return render(request, 'login.html')  

# 로그아웃
@login_required
def user_logout(request):
    logout(request)
    return redirect('home')


# 회원 정보 조회 - '마이페이지' > '내 정보'
@login_required
def user_profile(request):
    '''
    user = request.user
    profile = {
        'user_id': user.user_id,
        'user_name': user.user_name,
        'user_pw': user.user_pw,
        'profile_image': user.profile.profile_image.url if user.profile.profile_image else None,
        'gender': user.profile.gender,
        'birthday': user.profile.birthday
    }
    return render(request, 'view_profile.html', {'profile': profile})
    '''
    user = request.user
    if request.method == 'POST':
        user.user_name = request.POST['user_name']
        user.profile_image_url = request.FILES.get('profile_image') if user.profile.profile_image_url else None,
        user.gender = request.POST['gender']
        user.user_birth = request.POST['birthday']
        user.save()
        return redirect('profile')
    return render(request, 'mypage8_2.html', {'user': user})


# 회원 정보 수정 - '수정하기' 버튼 클릭 시 수정 가능
@login_required
def update_profile(request):
    if request.method == 'POST':
        user = request.user
        user.profile.user_name = request.get('user_name')
        user.profile.profile_image_url = request.FILES.get('profile_image')
        user.profile.gender = request.POST.get('gender')
        user.profile.user_birth = request.POST.get('birthday')
        user.profile.save()
        return redirect('user_profile', user_id=user.user_id)
    else:
        return render(request, 'update_profile.html')


# '좋아요' 기능
@login_required
def like_place(request, place_id):
    if request.method == 'POST':
        place = Place.objects.get(pk=place_id)
        # 이미 '좋아요'를 누른 여행지인지 확인
        if Like.objects.filter(user_id=request.user, place_id=place).exists():
            return JsonResponse({'error': 'You already liked this place'})
        else:
            Like.objects.create(user_id=request.user, place_id=place)
            return JsonResponse({'success': 'Place liked successfully'})


# '좋아요' 목록 조회
@login_required
def view_likes(request):
    liked_place = Like.objects.filter(user_id=request.user) #.values_list('liked_item', flat=True)
    return render(request, 'view_likes.html', {'liked_place': liked_place})


# '좋아요' 삭제
@login_required
def unlike_place(request, place_id):
    if request.method == 'POST':
        place = Place.objects.get(pk=place_id)
        Like.objects.filter(user_id=request.user, place_id=place).delete()
        return render(request, 'unlike_place.html')


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


# 여행지 세부 정보
def place_detail(request, place_id):
    place = get_object_or_404(Place, place_id=place_id)
    is_liked = False
    if request.user.is_authenticated:
        if Like.objects.filter(user_id=request.user, place_id=place).exists():
            is_liked = True
    return render(request, 'place_detail.html', {'place': place, 'is_liked': is_liked})


'''
사용자 별 여행 취향 키워드 등록

'''