from django.contrib import admin
from . import models
# Register your models here.
class todoadmin(admin.ModelAdmin):
    list_display=['id','name','time']
admin.site.register(models.todoModel,todoadmin)