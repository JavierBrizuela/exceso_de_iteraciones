from rest_framework.generics import UpdateAPIView
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from drf_spectacular.utils import extend_schema, extend_schema_view, OpenApiResponse, OpenApiParameter, OpenApiTypes
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

from .permissions import IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly
from .paginations import CustomPagination
from apps.project.models import Project, Brief
from apps.metadata.models import Framework
from .serializers import ProjectSerializer, ProjectListSerializer, ProjectDetailSerializer, BriefSerializer

@extend_schema_view(
    list = extend_schema(description='permite listar los projectos',summary='Project',responses={200:ProjectSerializer},),
    retrieve = extend_schema(description='permite ver un projecto en detalle',summary='Project',responses={200:ProjectSerializer},),
    create = extend_schema(description='permite ver un projecto en detalle',summary='Project',request=ProjectSerializer,responses={201:ProjectSerializer}),
    update = extend_schema(description='permite actualizar un projecto',summary='Project',request=ProjectSerializer,responses={200:ProjectSerializer}),
    destroy = extend_schema(description='permite eliminar un projecto de manera logica',summary='Project',),
)
@extend_schema(
    description=_('Change password'),
    summary='Project',
    request=ProjectSerializer,
)
class ProjectModelViewSet(ModelViewSet):
    queryset = Project.active_objects.all()
    http_method_names = ['get', 'post', 'patch', 'delete']
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    pagination_class = CustomPagination
    
    def get_serializer_class(self):
        if self.action == 'list':
            return ProjectListSerializer
        if self.action == 'retrieve':
            return ProjectDetailSerializer
        return ProjectSerializer
    
    def perform_create(self, serializer):

        serializer.validated_data['created_by'] = self.request.user
        serializer.save()
        
    def destroy(self, request, *args, **kwargs):
        id = self.kwargs.get('pk')
        project = Project.objects.get_object_by_id(id)
        
        if project:
            
            project.soft_delete()
            return Response(
                {"message":_("The project was deleted")},
                status=status.HTTP_204_NO_CONTENT
            )
            
        return Response(
                {"message":_("The project does not exist")},
                status=status.HTTP_404_NOT_FOUND
            )

class  BriefViewSets(UpdateAPIView):
    queryset = Brief.active_objects.all()    
    serializer_class = BriefSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    
    def get_object(self):

        id = self.kwargs.get('pk')
        return Brief.objects.get(project_id=id)
        
@extend_schema_view(
    add_user=extend_schema(
        summary='User-Project',
        description=_('add a user to current project'),
        responses={
        201: OpenApiResponse(description='Created'),
        400: OpenApiResponse(description='Bad Request')
    }
    ),
    remove_user=extend_schema(
        summary='User-Project',
        description=_('remove a user to current project'),
        parameters=[OpenApiParameter('id', OpenApiTypes.STR, OpenApiParameter.PATH, description='ID of the project')],
        responses={
            204: OpenApiResponse(description='No Content'),
            404: OpenApiResponse(description='Not Found'),
            }
    )
)
class UserProjectViewSet(ViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    @action(detail=False, methods=['post'], url_path='add-user')
    def add_user(self, request, pk=None):
        user = request.user
        project = get_object_or_404(Project, id=pk)
        project.team_members.add(user)
        return Response(status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['delete'], url_path='remove-user')
    def remove_user(self, request, email=None, pk=None):
        user = get_object_or_404(get_user_model(), email=email)
        project = get_object_or_404(Project, id=pk)
        project.team_members.remove(user)
        return Response(status=status.HTTP_204_NO_CONTENT)

class FrameworkProjectViewSet(ViewSet):
    permission_classes = [IsOwnerOrReadOnly]
    
    @action(detail=False, methods=['post'], url_path='add_framework')
    def add_framework(self, request, pk=None, framework_pk=None):
        project = get_object_or_404(Project, id=pk)
        framework = get_object_or_404(Framework, id=framework_pk)
        project.technology.add(framework)
        return Response(status=status.HTTP_201_CREATED)
    
    @action(detail=True, methods=['delete'], url_path='remove_framework')
    def remove_framework(self, request, pk=None, framework_pk=None):
        project = get_object_or_404(Project, id=pk)
        framework = get_object_or_404(Framework, id=framework_pk)
        project.technology.remove(framework)
        return Response(status=status.HTTP_204_NO_CONTENT)
        