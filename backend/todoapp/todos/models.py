from django.db import models

# Create your models here.
class todoModel(models.Model):
    id=models.IntegerField(primary_key=True,auto_created=True)
    name= models.CharField(max_length=100)
    time=models.DateTimeField(auto_now=True)
    complected=models.BooleanField(default=False)

    def __str__(self):
        return self.name