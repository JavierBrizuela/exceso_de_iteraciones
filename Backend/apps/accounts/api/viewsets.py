from rest_framework.generics import CreateAPIView, UpdateAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from drf_spectacular.utils import extend_schema
from django.utils.translation import gettext_lazy as _

from .serializers import UserCreateSerializer, ProfileSerialer

@extend_schema(
    description=_('Create new user'),
    summary='User',
    request=UserCreateSerializer,
    responses={201:UserCreateSerializer},
)
class Signup(CreateAPIView):
    #Register a new user
    serializer_class = UserCreateSerializer

@extend_schema(
    description=_('Get and update profile'),
    summary='User',
    request=ProfileSerialer,
    responses={
            200: {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'email': {'type': 'string', 'example': 'user@example.com'},
                        'first_name': {'type': 'string', 'example': 'John'},
                        'last_name': {'type': 'string', 'example': 'Doe'},
                        'photo': {'type': 'string', 'example': 'http://...'},
                        'permissions': {'type': 'string', 'example': 'colaborator'},
                    },
                },
            },
        },
)    
class ProfileView(RetrieveUpdateAPIView):
    
    permission_classes = [IsAuthenticated,]
    serializer_class = ProfileSerialer
    http_method_names = ['get', 'patch',]
    
    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user
