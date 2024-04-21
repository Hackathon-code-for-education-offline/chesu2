from django.urls import include, path
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from . import views
from .views import MyTokenObtainPairView, UniversityViewSet, FacultyViewSet, PostViewSet, CommentViewSet, \
    CommentCreateView, UserViewSet, PhotoViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'universities', UniversityViewSet)
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

    path('comments/', CommentCreateView.as_view(), name='create-comment'),

]