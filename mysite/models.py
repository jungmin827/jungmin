import uuid
from django.db import models # type: ignore
from django.contrib.auth.models import AbstractUser # type: ignore
from django.utils import timezone


class User(AbstractUser):
    birthday = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=(('M', 'Male'), ('F', 'Female')), null=True, blank=True)
    profile_pic = models.ImageField(upload_to='profile_pics', null=True, blank=True)

class Review(models.Model):
    review_id = models.AutoField(primary_key=True)
    date = models.CharField(max_length=20, null=True)
    contents = models.CharField(max_length=191, null=True)

class PlaceType(models.Model):
    type_id = models.AutoField(primary_key=True)
    type_name = models.CharField(max_length=191, null=True)

class Region(models.Model):
    region_id = models.AutoField(primary_key=True)
    region_addr = models.CharField(max_length=45, null=True)

class Place(models.Model):
    code = models.AutoField(primary_key=True)
    place_name = models.CharField(max_length=191, null=True)
    place_addr = models.CharField(max_length=191, null=True)
    place_image_url = models.CharField(max_length=191, null=True)
    type_id = models.ForeignKey(PlaceType, on_delete=models.CASCADE, null=True)
    review_id = models.OneToOneField(Review, on_delete=models.CASCADE, null=True, blank=True, related_name='place')
    region_id = models.ForeignKey(Region, on_delete=models.CASCADE, null=True)
    menu = models.CharField(max_length=191, null=True)
    callnum = models.CharField(max_length=191, null=True)
    Bday_time = models.CharField(max_length=191, null=True)
    place_url = models.CharField(max_length=191, null=True)
    

class Like(models.Model):
    like_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    place_id = models.ForeignKey(Place, on_delete=models.CASCADE, null=True)


class TestQ(models.Model):
    TQ_id = models.AutoField(primary_key=True)
    contents = models.CharField(max_length=191, null=True)

class Keyword(models.Model):
    kw_id = models.AutoField(primary_key=True)
    kw_name = models.CharField(max_length=191, null=True)
    TQ_id = models.ForeignKey(TestQ, on_delete=models.CASCADE, null=True)

class PlaceKeyword(models.Model):
    kw_id = models.ForeignKey(Keyword, on_delete=models.CASCADE, null=True, related_name='place_keywords')
    place_id = models.ForeignKey(Place, on_delete=models.CASCADE, null=True)
    type_id = models.ForeignKey(PlaceType, on_delete=models.CASCADE, null=True)
    TQ_id = models.ForeignKey(TestQ, on_delete=models.CASCADE, null=True, related_name='place_keywords')

class UserKeyword(models.Model):
    kw_id = models.ForeignKey(Keyword, on_delete=models.CASCADE, null=True)
    TQ_id = models.ForeignKey(TestQ, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)