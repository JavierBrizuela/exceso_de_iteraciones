from rest_framework.generics import CreateAPIView
from drf_spectacular.utils import extend_schema
from django.utils.translation import gettext_lazy as _

from .serializers import UserCreateSerializer

@extend_schema(
    description=_('Create new user'),
    summary='User',
    request=UserCreateSerializer,
    responses={201:UserCreateSerializer},
)
class Signup(CreateAPIView):
    #Register a new user
    serializer_class = UserCreateSerializer
    
