from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
import uuid

class AbstractActiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)

class AbstractManager(models.Manager):
    def get_object_by_id(self, id):
        try:
            instance = self.get(id=id)
            return instance
        except (ObjectDoesNotExist, ValueError, TypeError):
            raise Http404
    
class AbstractModel(models.Model):
    """
    Abstract model providing basic fields such as:
    - id: Unique identifier for the model.
    - is_active: Boolean field for logical deletion.
    - created: Date and time when the object was created.
    - updated: Date and time when the object was last updated.
    """
    id = models.UUIDField(
        primary_key=True, db_index=True, unique=True, editable=False, default=uuid.uuid4
        )
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    active_objects = AbstractActiveManager()
    objects = AbstractManager()
    
    def soft_delete(self):
        self.is_active = False
        self.save()
        
    def restore(self):
        self.is_active = True
        self.save()
        
    class Meta:
        abstract = True