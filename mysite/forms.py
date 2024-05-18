from django import forms # type: ignore
from django.contrib.auth.forms import UserCreationForm
from .models import User
from django.core.validators import validate_email

class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)

    class Meta:
        model = User
        fields = ['username', 'password1', 'password2', 'profile_pic', 'gender', 'birthday', 'email']
    
    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("비밀번호가 일치하지 않습니다.")
        return password2

    def clean_email(self):
        email = self.cleaned_data.get("email")
        if email:
            try:
                validate_email(email)
            except forms.ValidationError:
                raise forms.ValidationError("올바른 이메일 주소를 입력하세요.")
        return email 