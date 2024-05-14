# Generated by Django 5.0.3 on 2024-04-16 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0002_like_review_id_place_bday_time_place_callnum_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='keyword',
            name='kw_name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='place',
            name='Bday_time',
            field=models.CharField(default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='place',
            name='callNum',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='place',
            name='menu',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='place',
            name='place_addr',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='place',
            name='place_image_url',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='place',
            name='place_name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='place',
            name='place_url',
            field=models.CharField(default=None, max_length=255),
        ),
        migrations.AlterField(
            model_name='place_type',
            name='type_name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='review',
            name='contents',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='testq',
            name='contents',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='user',
            name='profile_image_url',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='user',
            name='user_name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='user',
            name='user_pw',
            field=models.CharField(max_length=255),
        ),
    ]
