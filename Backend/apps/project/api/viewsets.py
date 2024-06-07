from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from drf_spectacular.utils import extend_schema, extend_schema_view
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

from .permissions import IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly
from apps.project.models import Project, Brief
from .serializers import ProjectSerializer#, ProjectListSerializer

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
    queryset = Project.active_objects
    serializer_class = ProjectSerializer
    #list_serializer_class = ProjectListSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    
    
    def perform_create(self, serializer):

        serializer.validated_data['created_by'] = self.request.user
        serializer.save()
        
    def destroy(self, request, *args, **kwargs):
        id = self.kwargs.get('pk')
        project = Project.objects.get_object_by_id(id)
        
        if project:
            #if project.created_by.email == self.request.user:
            project.soft_delete()
            return Response(
                {"message":_("The project was deleted")},
                status=status.HTTP_204_NO_CONTENT
            )
            """ return Response(
                    {"message":_("You are not the owner")},
                    status=status.HTTP_401_UNAUTHORIZED
                ) """
        return Response(
                {"message":_("The project does not exist")},
                status=status.HTTP_404_NOT_FOUND
            )