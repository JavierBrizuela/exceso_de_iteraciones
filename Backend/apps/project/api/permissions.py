from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAuthenticatedOrReadOnly(BasePermission):
    """
    The request is authenticated as a user, or is a read-only request.
    """
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return request.user.is_authenticated

class IsOwnerOrReadOnly(BasePermission):
    """
    The request is owner, or is a read-only request.
    """
    def has_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        print(request.user)
        print(obj.created_by )
        return request.user == obj.created_by