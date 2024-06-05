from rest_framework.viewsets import ModelViewSet
from drf_spectacular.utils import extend_schema, extend_schema_view
from django.utils.translation import gettext_lazy as _

from .permissions import IsAuthenticatedOrReadOnly
from apps.project.models import Project, Brief
from .serializers import ProjectSerializer#, ProjectListSerializer

@extend_schema_view(
    list = extend_schema(description='permite listar los projectos',summary='Project',responses={200:ProjectSerializer},),
    retrieve = extend_schema(description='permite ver un projecto en detalle',summary='Project',responses={200:ProjectSerializer},),
    create = extend_schema(description='permite ver un projecto en detalle',summary='Project',request=ProjectSerializer,responses={200:ProjectSerializer}),
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
    permission_classes = [IsAuthenticatedOrReadOnly]
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)