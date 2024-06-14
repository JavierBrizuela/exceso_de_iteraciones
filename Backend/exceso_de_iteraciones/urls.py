from django.contrib import admin
from django.urls import path, include

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView
from rest_framework_simplejwt.views import TokenRefreshView

from apps.accounts.api.viewsets import Signup, ProfileView, ChangePasswordView
from apps.metadata.api.viewsets import UserRoleViewSet, UserLanguageViewSet, UserFrameworkViewSet
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
    path('api/profile-update/role/', UserRoleViewSet.as_view({'post': 'add_role'}), name='add_role'),
    path('api/profile-update/role/<int:pk>', UserRoleViewSet.as_view({'delete': 'remove_role'}), name='remove_role'),
    path('api/profile-update/language/', UserLanguageViewSet.as_view({'post': 'add_language'}), name='add_language'),
    path('api/profile-update/language/<int:pk>', UserLanguageViewSet.as_view({'delete': 'remove_language'}), name='remove_language'),
    path('api/profile-update/framework/', UserFrameworkViewSet.as_view({'post': 'add_framework'}), name='add_framework'),
    path('api/profile-update/framework/<int:framework_id>', UserFrameworkViewSet.as_view({'delete': 'remove_framework'}), name='remove_framework'),
    path('api/', include('apps.project.api.routers'), name='projects'),
    path('api/metadata/', include('apps.metadata.api.routers'), name='metadatas'),
    ]
