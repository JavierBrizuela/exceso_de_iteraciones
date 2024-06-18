from rest_framework.routers import DefaultRouter

from .viewsets import LanguageViewSet, FrameworkViewSet, RoleViewSet

router = DefaultRouter()
router.register(r'languages', LanguageViewSet, basename='language')
router.register(r'frameworks', FrameworkViewSet, basename='framework')
router.register(r'roles', RoleViewSet, basename='role')

urlpatterns = router.urls
