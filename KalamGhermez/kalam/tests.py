from django.test import TestCase

# Create your tests here.
from .models import User, UsersEducations, UsersOrganisations, Organization, Education, Question, Answer, Comment, UserVotes, Tag


print(Question.objects.all()[0].user)