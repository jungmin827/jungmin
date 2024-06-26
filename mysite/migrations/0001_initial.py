# Generated by Django 5.0.3 on 2024-05-15 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('review_id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateField(null=True)),
                ('contents', models.CharField(max_length=191, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='PlaceType',
            fields=[
                ('type_id', models.AutoField(primary_key=True, serialize=False)),
                ('type_name', models.CharField(max_length=191, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('region_id', models.AutoField(primary_key=True, serialize=False)),
                ('region_addr', models.CharField(max_length=45, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Place',
            fields=[
                ('place_id', models.AutoField(primary_key=True, serialize=False)),
                ('place_name', models.CharField(max_length=191, null=True)),
                ('place_addr', models.CharField(max_length=191, null=True)),
                ('place_image_url', models.CharField(max_length=191, null=True)),
                ('menu', models.CharField(max_length=191, null=True)),
                ('call_num', models.CharField(max_length=191, null=True)),
                ('BDay_time', models.CharField(max_length=191, null=True)),
                ('place_url', models.CharField(max_length=191, null=True)),
                ('type_details', models.CharField(max_length=191, null=True)),
                ('review_id', models.OneToOneField(blank=True, null=True, on_delete=models.CASCADE, related_name='place', to='mysite.Review')),
                ('region_id', models.ForeignKey(on_delete=models.CASCADE, to='mysite.Region', null=True)),
                ('type_id', models.ForeignKey(on_delete=models.CASCADE, to='mysite.PlaceType', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(blank=True, max_length=150, unique=True, verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, verbose_name='active')),
                ('date_joined', models.DateTimeField(auto_now_add=True, verbose_name='date joined')),
                ('birthday', models.DateField(blank=True, null=True)),
                ('gender', models.CharField(blank=True, choices=[('M', 'Male'), ('F', 'Female')], max_length=10, null=True)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='profile_pics')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Like',
            fields=[
                ('like_id', models.AutoField(primary_key=True, serialize=False)),
                ('place_id', models.ForeignKey(on_delete=models.CASCADE, to='mysite.Place', null=True)),
                ('user_id', models.ForeignKey(on_delete=models.CASCADE, to='mysite.User', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TestQ',
            fields=[
                ('TQ_id', models.AutoField(primary_key=True, serialize=False)),
                ('contents', models.CharField(max_length=191, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Keyword',
            fields=[
                ('kw_id', models.AutoField(primary_key=True, serialize=False)),
                ('kw_name', models.CharField(max_length=191, null=True)),
                ('TQ_id', models.ForeignKey(on_delete=models.CASCADE, to='mysite.TestQ', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='PlaceKeyword',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TQ_id', models.ForeignKey(on_delete=models.CASCADE, related_name='place_keywords', to='mysite.TestQ', null=True)),
                ('kw_id', models.ForeignKey(on_delete=models.CASCADE, related_name='place_keywords', to='mysite.Keyword', null=True)),
                ('place_id', models.ForeignKey(on_delete=models.CASCADE, to='mysite.Place', null=True)),
                ('type_id', models.ForeignKey(on_delete=models.CASCADE, to='mysite.PlaceType', null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserKeyword',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kw_id', models.ForeignKey(on_delete=models.CASCADE, to='mysite.Keyword', null=True)),
                ('TQ_id', models.ForeignKey(on_delete=models.CASCADE, to='mysite.TestQ', null=True)),
                ('user', models.ForeignKey(on_delete=models.CASCADE, to='mysite.User', null=True)),
            ],
        ),
    ]
