from django.db import models
from apps.abstracts.models import AbstractModel
from django.contrib.auth import get_user_model

# Create your models here.
PROJECT_TYPE = [
    ('educacion', 'educacion'),
    ('finanza', 'finanza'),
    ('e_commerce', 'e_commerce'),
    ('machine_learning', 'machine_learning'),
    ('otros', 'otros'),
]
DIFFICULTY_LEVEL = [
    ('0', 'beginner'),
    ('1', 'intermediate'),
    ('2', 'advanced'),  
]
STATUS = [
    ('0', 'waiting'),
    ('1', 'in_progress'),
    ('2', 'finished'),
    ('3', 'cancelled'),  
]

class Project(AbstractModel):
    created_by = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=PROJECT_TYPE, )
    description = models.TextField()
    difficulty = models.CharField(max_length=1, choices=DIFFICULTY_LEVEL)
    repository  = models.CharField(max_length=255, null=True, blank=True)
    actual_status = models.CharField(max_length=1, choices=STATUS, default='0')
    team_members = models.ManyToManyField(get_user_model(), related_name='projects')
    
    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Proyecto'
        verbose_name_plural = 'Proyectos'
        
class Brief(AbstractModel):
    project_id = models.OneToOneField(Project, on_delete=models.CASCADE)
    purpose = models.TextField(null=True, blank=True)
    goals = models.TextField(null=True, blank=True)
    audience = models.TextField(null=True, blank=True)
    story = models.TextField(null=True, blank=True)
    timeframe = models.CharField(max_length=50, null=True, blank=True)
    
    def __str__(self) -> str:
        return self.project_id.title
    
    class Meta:
        verbose_name = 'Resumen'
        verbose_name_plural = 'Resumenes'