# Generated by Django 5.0.3 on 2024-05-16 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0002_alter_user_options_alter_user_managers_user_groups_and_more'),
    ]

    operations = [
     #   migrations.RemoveField(
      #      model_name='place',
       #     name='type_details',
        #),
        migrations.AlterField(
            model_name='review',
            name='date',
            field=models.CharField(max_length=20, null=True),
        ),
    ]
