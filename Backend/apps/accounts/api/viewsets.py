from rest_framework.generics import CreateAPIView, UpdateAPIView, RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema
from django.utils.translation import gettext_lazy as _

from .serializers import UserCreateSerializer, ProfileSerialer, ChangePasswordSerializer

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

@extend_schema(
    description=_('Change password'),
    summary='User',
    request=ChangePasswordSerializer,
)
class ChangePasswordView(APIView):

    permission_classes = [IsAuthenticated,]
    http_allowed_method = ['post']
    def post(self, request, *args, **kwargs):
        serializer = ChangePasswordSerializer(data=request.data, context={'user': request.user})
        if serializer.is_valid():
            user = request.user
            user.set_password(serializer.validated_data['new_password'])
            user.save()
            return Response({'detail': _('Password changed successfully')}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)