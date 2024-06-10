from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status
from drf_spectacular.utils import extend_schema, extend_schema_view, OpenApiParameter
from django.utils.translation import gettext_lazy as _

from .permissions import IsModeratorOrReadOnly, IsAuthenticatedOrReadOnly
from apps.metadata.api.serializers import LanguageSerializer, FrameworkSerializer, RoleSerializer, UserFrameworkSerializer
from apps.metadata.models import Language, Framework, Role

class LanguageViewSet(ModelViewSet):
    serializer_class = LanguageSerializer
    queryset = Language.objects.all()
    permission_classes = [IsModeratorOrReadOnly]
    
class FrameworkViewSet(ModelViewSet):
    serializer_class = FrameworkSerializer
    queryset = Framework.objects.all()
    permission_classes = [IsModeratorOrReadOnly]
    
class RoleViewSet(ModelViewSet):
    serializer_class = RoleSerializer
    queryset = Role.objects.all()
    permission_classes = [IsModeratorOrReadOnly]
    
@extend_schema_view(
    post=extend_schema(
        parameters=[
            OpenApiParameter(name='framework_id', description='ID of the Framework', required=True, type=int)
        ]
    ),
    delete=extend_schema(
        parameters=[
            OpenApiParameter(name='framework_id', description='ID of the Framework', required=True, type=int)
        ]
    )
)
class UserRoleViewSet(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    
    def post(self, request, role_id):
        """
        Add the current user to the role's users.
        """
        role = Role.objects.filter(id=role_id).first()
        if role:
            user = request.user
            role.users.add(user)
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(
            {"message":"the role_id do not exists"},
            status=status.HTTP_400_BAD_REQUEST
            )
    def delete(self, request, role_id):
        """
        Remove the current user from the role's users.
        """
        role = Role.objects.get(id=role_id)
        if role:
            user = request.user
            role.users.remove(user)
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(
            {"message":"the role_id do not exists"},
            status=status.HTTP_400_BAD_REQUEST
            )

@extend_schema(
    description=_('add framework to the current user'),
    summary='User-framework',
    request=UserFrameworkSerializer,
)
class UserFrameworkViewSet(APIView):
   
    def post(self, request):
        user = request.user
        serializer = UserFrameworkSerializer(data=request.data)
        if serializer.is_valid():
            framework = serializer.validated_data['framework_id']
            framework.users.add(user)
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request):
        user = request.user
        serializer = UserFrameworkSerializer(data=request.data)
        if serializer.is_valid():
            framework = serializer.validated_data['framework_id']
            framework.users.remove(user)
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)