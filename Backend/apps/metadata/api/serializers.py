from rest_framework import serializers
from apps.metadata.models import Language, Framework, Role

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = (
            'id',
            'name',
            
            )
        
class FrameworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Framework
        fields = (
            'id',
            'name',
            'language_id',
            )
        
class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = (
            'id',
            'name',
            )

class UserRoleSerializer(serializers.Serializer):
    role_id = serializers.PrimaryKeyRelatedField(queryset=Role.objects.all())
    
class UserLanguageSerializer(serializers.Serializer):
    language_id = serializers.PrimaryKeyRelatedField(queryset=Language.objects.all())
        
class UserFrameworkSerializer(serializers.Serializer):
    framework_id = serializers.PrimaryKeyRelatedField(queryset=Framework.objects.all())