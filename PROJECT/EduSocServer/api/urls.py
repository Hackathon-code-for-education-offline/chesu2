from django.urls import include, path
from rest_framework import routers

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from . import views
from .views import MyTokenObtainPairView, UniversityViewSet, FacultyViewSet

router = routers.DefaultRouter()
router.register(r'universities', UniversityViewSet)
router.register(r'faculties', FacultyViewSet)


urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),

    path('', include(router.urls)),

]