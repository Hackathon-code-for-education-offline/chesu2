from django.urls import include, path
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from . import views
from .views import MyTokenObtainPairView, UniversityViewSet, FacultyViewSet, PostViewSet, CommentViewSet, \
    CommentCreateView, UserViewSet, PhotoViewSet, ChatRoomView, MessageListView, GetOrCreateChatView

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'universities', UniversityViewSet)
router.register(r'posts', PostViewSet)
router.register(r'photos', PhotoViewSet)
router.register(r'commets', CommentViewSet)
router.register(r'faculties', FacultyViewSet)



urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),

    path('', include(router.urls)),

    path('chat/<int:user_id>/', GetOrCreateChatView.as_view(), name='get_or_create_chat'),
    # path('chat/<int:pk>/', ChatRoomView.as_view(), name='chat-room'),
    path('messages/', MessageListView.as_view(), name='message-list'),
    path('comments/', CommentCreateView.as_view(), name='create-comment'),

]