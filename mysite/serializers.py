from rest_framework import serializers
from .models import User
from .models import Review
from .models import PlaceType
from .models import Place
from .models import PlaceKeyword
from .models import Region
from .models import Like
from .models import TestQ
from .models import Keyword
from .models import UserKeyword

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'password', 'birthday', 'gender', 'profile_pic']

    def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            birthday=validated_data['birthday'],
            gender=validated_data['gender'],
            profile_pic=validated_data.get('profile_pic')
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.birthday = validated_data.get('birthday', instance.birthday)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.profile_pic = validated_data.get('profile_pic', instance.profile_pic)

        password = validated_data.get('password')
        if password:
            instance.set_password(password)
        instance.save()
        return instance
    
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'  

class PlaceTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceType
        fields = '__all__'  

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'    


class PlaceKeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceKeyword
        fields = '__all__' 

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region
        fields = '__all__' 

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['id', 'place_id']

class TestQSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestQ
        fields = '__all__' 

class KeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Keyword
        fields = '__all__' 

class UserKeywordSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserKeyword
        fields = '__all__' 
