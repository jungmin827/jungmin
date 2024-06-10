from django.urls import path, include  # type: ignore
from . import views
from rest_framework.routers import DefaultRouter
from .views import (  # type: ignore
    UserViewSet, ReviewViewSet, PlaceTypeViewSet, RegionViewSet,
    PlaceViewSet, LikeViewSet, TestQViewSet, KeywordViewSet,
    PlaceKeywordViewSet, UserKeywordViewSet
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'place-types', PlaceTypeViewSet)
router.register(r'regions', RegionViewSet)
router.register(r'places', PlaceViewSet)
router.register(r'likes', LikeViewSet)
router.register(r'test-questions', TestQViewSet)
router.register(r'keywords', KeywordViewSet)
router.register(r'place-keywords', PlaceKeywordViewSet)
router.register(r'user-keywords', UserKeywordViewSet)

urlpatterns = [
    # 메인 뷰 (여행 계획 단계별 선택)
    path('', views.main_view, name='main_view'),
    # 회원 가입
    path('signup/', views.signup, name='signup'),
    # 회원 탈퇴
    path('delete-user/', views.delete_user, name='delete_user'),
    # 로그인
    path('login/', views.user_login, name='login'),
    # 로그아웃
    path('logout/', views.user_logout, name='logout'),
    # 회원 정보 조회 및 수정
    path('profile/', views.user_profile, name='profile'),
    # 여행지 세부 정보
    path('place/<int:place_id>/', views.place_detail, name='place_detail'),
    # 좋아요 기능
    path('like-place/<int:place_id>/', views.like_place, name='like_place'),
    # 좋아요 목록 조회
    path('view-likes/', views.view_likes, name='view_likes'),
    # 좋아요 삭제
    path('unlike-place/<int:place_id>/', views.unlike_place, name='unlike_place'),
    path('api/signup/', UserViewSet.as_view({'post': 'signup'}), name='signup'),
    path('api/update_profile/', UserViewSet.as_view({'put': 'update_profile'}), name='update_profile'),
    # API URLs
    path('api/', include(router.urls)),
]
