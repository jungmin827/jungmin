from django import forms # type: ignore
from django.contrib.auth.forms import UserCreationForm # type: ignore
from .models import User

class CustomUserCreationForm(UserCreationForm):
    birthday = forms.DateField(required=False)
    gender = forms.ChoiceField(choices=(('M', 'Male'), ('F', 'Female')), required=False)
    profile_pic = forms.ImageField(required=False)

    def clean_id(self):
        user_id = self.cleaned_data['user_id']
        if User.objects.filter(user_id=user_id).exists():
            raise forms.ValidationError("이미 사용 중인 아이디입니다.")
        return user_id
    
    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("비밀번호가 일치하지 않습니다.")
        return password2