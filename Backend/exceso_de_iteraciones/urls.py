from django.contrib import admin
from django.urls import path

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularRedocView
from rest_framework_simplejwt.views import TokenRefreshView

from apps.accounts.api.viewsets import Signup, ProfileView
from apps.accounts.views import Login

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/swagger-ui/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger_ui'),
    path('api/schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    path('api/signup/', Signup.as_view(), name='signup'),
    path('api/login/', Login.as_view(), name='login'),
    path('api/login/refresh', TokenRefreshView.as_view(), name='refresh'),
    path('api/profile-view/', ProfileView.as_view(), name='profile_view'),
]
