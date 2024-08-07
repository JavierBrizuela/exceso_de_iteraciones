from drf_spectacular.utils import extend_schema
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.views import PasswordChangeView
from django.urls import reverse_lazy

from .api.serializers import TokenObtainSerilizer, TokenResponseSerilizer

# Create your views here.
@extend_schema(
        description='Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.',
        summary='User',
        responses={200:TokenResponseSerilizer}
        )
class Login(TokenObtainPairView):
    
    serializer_class = TokenObtainSerilizer