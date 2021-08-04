from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length = 30)
    uname = models.CharField(max_length = 30)
    email = models.EmailField(max_length = 30)
    pwd = models.CharField(max_length = 15)
    dob = models.DateField()
    phone = models.BigIntegerField()
    add1 = models.CharField(max_length = 50)
    add2 = models.CharField(max_length = 50, null = True, blank = True)
    city = models.CharField(max_length = 20)
    state = models.CharField(max_length = 50)
    country = models.CharField(max_length = 50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id)