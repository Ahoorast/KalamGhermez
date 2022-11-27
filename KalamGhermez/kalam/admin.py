from django.contrib import admin
from .models import UserData, UsersEducations, UsersOrganisations, Organization, Education, Question, Answer, Comment, UserVotes, Tag

# Register your models here.
admin.site.register(UserData)
admin.site.register(UsersEducations)
admin.site.register(UsersOrganisations)
admin.site.register(Organization)
admin.site.register(Education)
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Comment)
admin.site.register(UserVotes)
admin.site.register(Tag)