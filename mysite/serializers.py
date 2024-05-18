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
        fields = '__all__'

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
        fields = '__all__' 

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