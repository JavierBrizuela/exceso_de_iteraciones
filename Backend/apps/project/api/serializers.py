from rest_framework import serializers
from django.contrib.auth import get_user_model
from apps.project.models import Project
from apps.accounts.api.serializers import UserCreateSerializer

""" class UserNameRelatedField(serializers.RelatedField):
    def to_representation(self, value):
        return value.username
    
class ProjectListSerializer(serializers.ListSerializer):
    created_by_username = UserNameRelatedField(read_only=True)
    
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
        ) """
        
class ProjectSerializer(serializers.ModelSerializer):
    created_by = UserCreateSerializer(read_only=True)
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
        """list_serializer_class = ProjectListSerializer
        
         def create(self, validated_data):
            validated_data['created_by'] = 
            return Project.objects.create(**validated_data) """
            