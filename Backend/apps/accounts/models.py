from django.db import models
from django.contrib.auth.models import AbstractBaseUser

from apps.abstracts.models import AbstractModel
from .managers import CustomUserManager

# Create your models here.

class CustomUser(AbstractModel, AbstractBaseUser):
    """
    It is a new model for custom user
 
    Inherits from:
    - AbstractModel: Provides basic fields like id, created, updated, and is_active.
    - AbstractBaseUser: Provides basic fields like email, password, last_login and methods for a user model 

    Fields:
        email (str): User's email, must be unique.
        first_name (str): User's first name, optional.
        last_name (str): User's last name, optional.
        photo (str): URL of the user's photo, optional.
        is_collaborator (bool): Indicates if the user is a collaborator.
        is_moderator (bool): Indicates if the user is a moderator.
        is_staff (bool): Indicates if the user has admin panel permissions.
        is_superuser (bool): Indicates if the user is a superuser.
    """    

    email = models.EmailField(unique=True, null=False, blank=False)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    photo = models.CharField(max_length=255, null=True, blank=True)
    is_active  = models.BooleanField(default=True)
    is_colaborator = models.BooleanField(default=False)
    is_moderator = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password',]
    objects = CustomUserManager()
    
    def has_module_perms(self, app_label):
        """
        Returns True if the user has permissions for the given module.

        Args:
            app_label (str): Application name.

        Returns:
            bool: True if the user has permissions for the module.
        """
        return True  # change this according you permissions rules

    def has_perm(self, perm, obj=None):
        """
        Returns True if the user has the given permission.

        Args:
            perm (str): Permission name.
            obj (obj): Optional object to check the permission against.

        Returns:
            bool: True if the user has the permission.
        """
        return True  # change this according you permissions rules
    
    def __str__(self) -> str:
        return self.email
    
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'