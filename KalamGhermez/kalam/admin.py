from django.contrib import admin
from .models import User, UsersEducations, UsersOrganisations, Organization, Education, Question, Answer, Comment

# Register your models here.
admin.site.register(User)
admin.site.register(UsersEducations)
admin.site.register(UsersOrganisations)
admin.site.register(Organization)
admin.site.register(Education)
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Comment)