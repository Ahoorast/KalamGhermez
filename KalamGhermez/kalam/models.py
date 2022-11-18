from django.db import models
from django.contrib.auth.models import User as DjangoUser

# Create your models here.

class Organization(models.Model):
    title = models.CharField(max_length=50, unique=True)
    def __str__(self):
        return self.title

class Education(models.Model):
    place = models.CharField(max_length=50, unique=True)
    def __str__(self):
        return self.place

class User(models.Model):
    user = models.OneToOneField(DjangoUser, on_delete=models.CASCADE)
    def __str__(self):
        return self.user.username

class UsersOrganisations(models.Model):  
    user = models.ManyToManyField(User)
    organization = models.ManyToManyField(Organization)
    jobTitle = models.CharField(max_length=50, blank=True)
    jobDescription = models.CharField(max_length=300, blank=True)
    stillWorking = models.BooleanField()
    def __str__(self):
        s = ""
        if not self.stillWorking:
            s += "Ex "
        s += self.jobTitle
        s += " at " + self.organization
        return s
    

class UsersEducations(models.Model):
    user = models.ManyToManyField(User)
    educations = models.ManyToManyField(Education)
    grade = models.CharField(max_length=50)
    graduated = models.BooleanField()
    def __str__(self):
        s = ""
        if self.graduated:
            s += ""
        s += " of " + self.educations
        return s