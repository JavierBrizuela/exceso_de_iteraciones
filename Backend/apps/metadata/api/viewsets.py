from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework.decorators import action
from rest_framework import status
from drf_spectacular.utils import extend_schema, extend_schema_view, OpenApiParameter, OpenApiTypes, OpenApiResponse

from django.utils.translation import gettext_lazy as _
from django.shortcuts import get_object_or_404

from .permissions import IsModeratorOrReadOnly, IsAuthenticatedOrReadOnly
from apps.metadata.api.serializers import LanguageSerializer, FrameworkSerializer, RoleSerializer, UserFrameworkSerializer, UserRoleSerializer
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
    add_role=extend_schema(
        summary='User-Role',
        description=_('add a role to current user'),
        request=UserRoleSerializer,
        responses={
        201: OpenApiResponse(description='Created'),
        400: OpenApiResponse(description='Bad Request')
    }
    ),
    remove_role=extend_schema(
        summary='User-Role',
        description=_('remove a role to current user'),
        parameters=[OpenApiParameter('id', OpenApiTypes.INT, OpenApiParameter.PATH, description='ID of the Role')],
        responses={
            204: OpenApiResponse(description='No Content'),
            404: OpenApiResponse(description='Not Found'),
            }
    )
)
class UserRoleViewSet(ViewSet):

    permission_classes = [IsAuthenticatedOrReadOnly]
    
    @action(detail=False, methods=['post'], url_path='add-role')
    def add_role(self, request):
        user = request.user
        serializer = UserRoleSerializer(data=request.data)
        if serializer.is_valid():
            role = serializer.validated_data['role_id']
            role.users.add(user)
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['delete'], url_path='remove-role')
    def remove_role(self, request, pk=None):
        user = request.user
        role = get_object_or_404(Role, id=pk)
        role.users.remove(user)
        return Response(status=status.HTTP_204_NO_CONTENT)

@extend_schema(
        request=UserFrameworkSerializer,
        responses={
        201: OpenApiResponse(description='Created'),
        400: OpenApiResponse(description='Bad Request')
    }
    )
class AddUserFrameworkViewSet(APIView):
   
    def post(self, request):
        user = request.user
        serializer = UserFrameworkSerializer(data=request.data)
        if serializer.is_valid():
            framework = serializer.validated_data['framework_id']
            framework.users.add(user)
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@extend_schema(
        parameters=[OpenApiParameter('framework_id', OpenApiTypes.INT, OpenApiParameter.PATH, description='ID of the Framework')],
        responses={
            204: OpenApiResponse(description='No Content'),
            404: OpenApiResponse(description='Not Found'),
            }
    )    
class RemoveUserFrameworkViewSet(APIView):
    
    def delete(self, request, framework_id):
        user = request.user
        framework = get_object_or_404(Framework, id=framework_id)
        framework.users.remove(user)
        return Response(status=status.HTTP_204_NO_CONTENT)
       