from django.apps import AppConfig
from django import forms


class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.accounts'

class ChangePasswordForm(forms.Form):
        old_password = forms.CharField(widget = forms.PasswordInput())
        new_password = forms.CharField(widget = forms.PasswordInput())
        confirm_password = forms.CharField(widget = forms.PasswordInput())

