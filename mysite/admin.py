from django.contrib import admin
from .models import User, Review, PlaceType, Region, Place, Like, TestQ, Keyword, PlaceKeyword, UserKeyword

# Register your models here.
admin.site.register(User)
admin.site.register(Review)
admin.site.register(PlaceType)
admin.site.register(Region)
admin.site.register(Place)
admin.site.register(Like)
admin.site.register(TestQ)
admin.site.register(Keyword)
admin.site.register(PlaceKeyword)
admin.site.register(UserKeyword)
