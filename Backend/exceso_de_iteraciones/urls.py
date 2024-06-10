from django.contrib import admin
from django.urls import path, include

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView
from rest_framework_simplejwt.views import TokenRefreshView

from apps.accounts.api.viewsets import Signup, ProfileView, ChangePasswordView
from apps.metadata.api.viewsets import UserRoleViewSet, UserFrameworkViewSet
from apps.accounts.views import Login

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger_ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    path('api/signup/', Signup.as_view(), name='signup'),
    path('api/login/', Login.as_view(), name='login'),
    path('api/login/refresh', TokenRefreshView.as_view(), name='refresh'),
    path('api/profile-update/', ProfileView.as_view(), name='profile_view'),
    path('api/profile-update/change-password/', ChangePasswordView.as_view(), name='change_password'),
    path('api/profile-update/user-role/', UserRoleViewSet.as_view(), name='user_role'),
    path('api/profile-update/user-framework/', UserFrameworkViewSet.as_view(), name='user_framework'),
    path('api/', include('apps.project.api.routers'), name='projects'),
    path('api/metadata/', include('apps.metadata.api.routers'), name='metadatas'),
    
    ]
