from rest_framework.routers import DefaultRouter
from .viewsets import ProjectModelViewSet

router = DefaultRouter()
router.register(r'projects', ProjectModelViewSet, basename='project')
urlpatterns = router.urls
