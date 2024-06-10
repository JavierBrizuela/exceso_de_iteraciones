from django.db import models
from django.contrib.auth import get_user_model

class Language(models.Model):
    name = models.CharField(unique=True, max_length=100)
    
    def __str__(self):
        return self.name

class Framework(models.Model):
    name = models.CharField(unique=True, max_length=100)
    language_id = models.ForeignKey(Language, on_delete=models.CASCADE)
    users = models.ManyToManyField(get_user_model(), related_name='frameworks')

    def __str__(self):
        return self.name

class Role(models.Model):
    name = models.CharField(unique=True, max_length=100)
    users = models.ManyToManyField(get_user_model(), related_name='roles')

    def __str__(self):
        return self.name
