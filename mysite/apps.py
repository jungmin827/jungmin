from django.apps import AppConfig # type: ignore

class MyAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'mysite'