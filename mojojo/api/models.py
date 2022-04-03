from django.db import models

# Create your models here.

from django.db import models

# Create your models here.

class Action(models.Model):
	social_network = models.CharField(max_length=100)
	name = models.CharField(max_length=100)

class User(models.Model):
	username = models.CharField(max_length=70)
	password = models.CharField(max_length=32)
	expiration = models.DateField()
	actions = models.ManyToManyField(Action)

class Admin(models.Model):
	username = models.CharField(max_length=70)
	password = models.CharField(max_length=32)