from django import forms # type: ignore
from django.contrib.auth.forms import UserCreationForm
from .models import User
from django.core.validators import validate_email
class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    class Meta:
        model = User
        fields = ['username', 'password1', 'password2', 'profile_pic', 'gender', 'birthday', 'email']

    '''
    def clean_id(self):
        user_id = self.cleaned_data['user_id']
        if User.objects.filter(user_id=user_id).exists():
            raise forms.ValidationError("이미 사용 중인 아이디입니다.")
        return user_id
    '''

    def clean(self):
        cleaned_data = super().clean()
        user_id = cleaned_data.get('id')
        if User.objects.filter(id=user_id).exists():
            raise forms.ValidationError("이미 사용 중인 아이디입니다.")
        return user_id

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
        return email 
