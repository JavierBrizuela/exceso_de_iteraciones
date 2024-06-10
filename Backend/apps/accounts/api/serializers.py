from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django import forms
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('email', 'first_name', 'last_name', 'username', 'password', 'photo')
        extra_kwargs = {"password": {"write_only": True}}
    
    def validate_email(self, value):
        #Check that the email is unique.
        if get_user_model().objects.filter(email=value).exists():
            raise ValidationError(_('Email already exists'))
        return value
    
    def validate_username(self, value):
        #Check that the username is unique.
        if get_user_model().objects.filter(username=value).exists():
            raise ValidationError(_('Username already exists'))
        return value
    
    def validate_password(self, value):
        #Encrypt password
        return make_password(value)

class ProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = get_user_model()
        fields = ('email', 'first_name', 'last_name', 'username', 'photo')
        
    def validate_email(self, value):
        
        if get_user_model().objects.filter(email=value).exists():
            if self.instance.email != value:
                raise ValidationError(_('Email already exists'))
        return value
    
    def validate_username(self, value):
        #Check that the username is unique.
        if get_user_model().objects.filter(username=value).exists():
            if self.instance.username != value:
                raise ValidationError(_('Username already exists'))
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
                "user_username": self.user.username,
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
    user_username = serializers.CharField()
    user_photo = serializers.CharField()
    user_email = serializers.CharField()
    
class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(min_length=8, max_length=255, write_only=True, required=True, allow_null=False)
    new_password = serializers.CharField(min_length=8, max_length=255, write_only=True, required=True, allow_null=False)
    confirm_password = serializers.CharField(min_length=8, max_length=255, write_only=True, required=True, allow_null=False)
    
    def validate_old_password(self, value):
        user = self.context.get('user')
        if authenticate(username=user, password=value):
            return value
        raise serializers.ValidationError(_('wrong password'))
    
    def validate(self, data):
        if data['new_password'] == data['confirm_password']:
            return data
        raise serializers.ValidationError(_('new passwords do not match'))
    