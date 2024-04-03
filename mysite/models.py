from django.db import models

class User(models.Model):
    user_id = models.CharField(max_length=256, primary_key=True)
    user_pw = models.CharField(max_length=256)
    user_name = models.CharField(max_length=256)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    user_birth = models.DateField()
    profile_image_url = models.CharField(max_length=256)

class Review(models.Model):
    review_id = models.CharField(max_length=256, primary_key=True)
    date = models.DateTimeField(auto_now_add=True)
    contents = models.CharField(max_length=256)    

class Place_Type(models.Model):
    type_id = models.CharField(max_length=256, primary_key=True)
    type_name = models.CharField(max_length=256)

class Region(models.Model):
    region_id = models.AutoField(primary_key=True)
    region_addr = models.CharField(max_length=45)

class Place(models.Model):
    place_id = models.CharField(max_length=256, primary_key=True)
    place_name = models.CharField(max_length=256)
    place_addr = models.CharField(max_length=256)
    place_image_url = models.CharField(max_length=256)
    type_id = models.ForeignKey(Place_Type, on_delete=models.CASCADE)
    review_id = models.ForeignKey(Review, on_delete=models.CASCADE)
    region_id = models.ForeignKey(Region, on_delete=models.CASCADE)

class Like(models.Model):
    like_id = models.CharField(max_length=256, primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    region_id = models.ForeignKey(Region, on_delete=models.CASCADE)
    place_id = models.ForeignKey(Place, on_delete=models.CASCADE)
    type_id = models.ForeignKey(Place_Type, on_delete=models.CASCADE)

class TestQ(models.Model):
    TQ_id = models.CharField(max_length=256, primary_key=True)
    contents = models.CharField(max_length=256)

class Keyword(models.Model):
    kw_id = models.CharField(max_length=256, primary_key=True)
    kw_name = models.CharField(max_length=256)
    TQ_id = models.ForeignKey(TestQ, on_delete=models.CASCADE)

class Place_Keyword(models.Model):
    kw_id = models.ForeignKey(Keyword, on_delete=models.CASCADE)
    place_id = models.ForeignKey(Place, on_delete=models.CASCADE)
    type_id = models.ForeignKey(Place_Type, on_delete=models.CASCADE)

class User_Keyword(models.Model):
    kw_id = models.ForeignKey(Keyword, on_delete=models.CASCADE)
    TQ_id = models.ForeignKey(TestQ, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)


