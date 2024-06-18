from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.project.models import Project, Brief
from apps.accounts.api.serializers import UserCreateSerializer
from apps.metadata.api.serializers import FrameworkSerializer
    
class BriefSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Brief
        fields = (
            'project_id',
            'purpose',
            'goals',
            'audience',
            'story',
            'timeframe',
        )
    
class ProjectListSerializer(serializers.ModelSerializer):
    created_by_username = serializers.EmailField(source='created_by.username', read_only=True)     
    
    class Meta:
        model = Project
        fields = (
            'id',
            'created_by_username',
            'title',
            'type',
            'description',
            'difficulty',
            'repository',
            'actual_status',
        ) 
        
class ProjectSerializer(serializers.ModelSerializer):
    created_by = UserCreateSerializer(read_only=True)
    
    def create(self, validate_data):
        project = Project.objects.create(**validate_data)
        brief = Brief.objects.create(project_id=project)
        return project
        
    class Meta:
        model = Project
        fields = (
            'id',
            'created_by',
            'title',
            'type',
            'description',
            'difficulty',
            'repository',
            'actual_status',
        )
       
class ProjectDetailSerializer(serializers.ModelSerializer):
    created_by = UserCreateSerializer(read_only=True)
    brief = BriefSerializer(read_only=True)
    technology = FrameworkSerializer(many=True, read_only=True)
    team_members = UserCreateSerializer(many=True, read_only=True)
    
    class Meta:
        model = Project
        fields = (
            'id',
            'created_by',
            'title',
            'type',
            'description',
            'difficulty',
            'repository',
            'actual_status',
            'brief',
            'technology',
            'team_members',
        )