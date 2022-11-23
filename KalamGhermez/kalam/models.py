from django.db import models
from django.contrib.auth.models import User as DjangoUser
from django_quill.fields import QuillField
from datetime import datetime

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

# base model for Questions, Answers and Comments
class QAC(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = QuillField()
    upvotesCount = models.IntegerField(default=0)
    downvotesCount = models.IntegerField(default=0)
    publishDate = models.DateTimeField(default=datetime.now())
    lastEdit = models.DateTimeField(blank=True)
    def __str__(self):
        return self.text

# base model for only Questions and Answers (need to use a seprate base model(QA) for questions and answers so that comments won't have other comments as a ForeignKey)
class QA(QAC):
    def __str__(self):
        return self.text

class Question(QA):
    title = models.CharField(max_length=50)
    solved = models.BooleanField(default=False)
    viewed = models.IntegerField(default=0)
    def __str__(self):
        return self.title

class Answer(QA):
    _question = models.ForeignKey(Question, on_delete=models.CASCADE)
    worked = models.BooleanField(default=False)
    def __str__(self):
        return self.text

class Comment(QAC):
    QorA = models.ForeignKey(QA, on_delete=models.CASCADE)
    def __str__(self):
        return self.text

    
class UserVotes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    _QAC = models.ForeignKey(QAC, on_delete=models.CASCADE)
    voteType = models.BooleanField() # 0 if downvote 1 if upvote
    class Meta:
        unique_together = ('user', '_QAC', 'voteType')


class Tag(models.Model):
    name = models.CharField(max_length=10)
    description = models.CharField(max_length=100)
    questions = models.ManyToManyField(Question)
    def __str__(self):
        return self.name