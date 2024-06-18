from rest_framework.generics import CreateAPIView, UpdateAPIView, RetrieveUpdateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema, extend_schema_view
from django.utils.translation import gettext_lazy as _

from .serializers import UserCreateSerializer, ProfileSerializer, ChangePasswordSerializer

@extend_schema(
    description=_('Create new user'),
    summary='User',
    request=UserCreateSerializer,
    responses={201:UserCreateSerializer},
)
class Signup(CreateAPIView):
    #Register a new user
    serializer_class = UserCreateSerializer

@extend_schema_view(
    get=extend_schema(
        summary="Retrieve user profile",
        description="Retrieve the profile of the currently authenticated user",
        responses={
            200: {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'email': {'type': 'string', 'example': 'user@example.com'},
                        'first_name': {'type': 'string', 'example': 'John'},
                        'last_name': {'type': 'string', 'example': 'Doe'},
                        'username': {'type': 'string', 'example': 'JohnDoe'},
                        'photo': {'type': 'string', 'example': 'http://...'},
                        'roles':{'example': [
                            {   
                                "id": 1,
                                'name': 'Admin'
                             },
                            {
                                "id": 4,
                                'name': 'User'
                            }
                        ]},
                        'languages':{'example':[
                            {
                                "id": 1,
                                'name': 'Python'
                            },
                            {
                                "id": 2,
                                'name': 'JavaScript'
                            }
                        ]},
                        'frameworks':{'example':[
                            {
                                "id": 1,
                                'name': 'Django',
                                "language_id": 1
                            },
                            {
                                "id": 1,
                                'name': 'React',
                                "language_id": 2
                            }
                        ]},
                        'permissions': {'type': 'string', 'example': 'colaborator'},
                    },
                },
            },
        },
    ),
    patch=extend_schema(
        summary="Update user profile",
        description="Update the profile of the currently authenticated user",
        request=ProfileSerializer,
        responses={200: ProfileSerializer},
    ),
)

class ProfileView(RetrieveUpdateAPIView):
    
    permission_classes = [IsAuthenticated,]
    serializer_class = ProfileSerializer
    http_method_names = ['get', 'patch',]
    
    def get_object(self):
        if self.request.user.is_authenticated:
            return self.request.user

@extend_schema(
    description=_('Change password'),
    summary='User',
    request=ChangePasswordSerializer,
)
class ChangePasswordView(GenericAPIView):
    serializer_class = ChangePasswordSerializer
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