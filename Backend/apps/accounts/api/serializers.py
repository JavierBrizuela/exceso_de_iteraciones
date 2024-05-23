from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('email', 'first_name', 'last_name', 'password', 'photo')
        extra_kwargs = {"password": {"write_only": True}}
    
    def validate_email(self, value):
        #Check that the email is unique.
        if get_user_model().objects.filter(email=value).exists():
            raise ValidationError(_('Email already exists'))
        return value
    
    def validate_password(self, value):
        #Encrypt password
        return make_password(value)

class ProfileSerialer(serializers.ModelSerializer):
    
    class Meta:
        model = get_user_model()
        fields = ('email', 'first_name', 'last_name', 'photo')
        
    def validate_email(self, value):
        
        if get_user_model().objects.filter(email=value).exists():
            if self.request.user != value:
                raise ValidationError(_('Email already exists'))
        return value
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        
        if instance.is_moderator:
            representation['permissions'] = 'moderator'
            
        elif instance.is_colaborator:
            representation['permissions'] = 'colaborator'
        
        else :    
            representation['permissions'] = 'user'
            
        return representation
        
class TokenObtainSerilizer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        # Custom claims
        user_info = {
                'user_id':self.user.id,
                'user_first_name':self.user.first_name,
                "user_last_name": self.user.last_name,
                "user_photo": self.user.photo,
                "user_email": self.user.email
                }
        data.update(user_info)
        
        return data

class TokenResponseSerilizer(serializers.Serializer):
    access = serializers.CharField()
    refresh = serializers.CharField()
    user_id = serializers.CharField()
    user_first_name = serializers.CharField()
    user_last_name = serializers.CharField()
    user_photo = serializers.CharField()
    user_email = serializers.CharField()