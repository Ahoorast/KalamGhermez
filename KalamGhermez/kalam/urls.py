from django.urls import path
from django.views.decorators.cache import cache_page


from . import views

app_name = 'kalam'

urlpatterns = [
    #path('', views.index, name='index'),
    #path('page/<int:page_index>/', views.index, name='index_by_page'),
    #path('job/<int:work_id>/', cache_page(60)(views.details)    , name='details'),
    #path('signup/', views.signupView, name="signup"),
    #path('login/', views.loginView, name="login"),
    #path('activate/<uidb64>/<token>', views.activate, name='activate'),
    #path('logout/', views.logoutView, name='logout'),
    #path('addjob/', views.addWork, name='addWork'),
    #path('assignjob/<int:work_id>', views.assignJobToUser, name='assignJob'),
    #path('load/', views.loadMore, name="loadMore")
    #path('signup/', views.index, name='index'),
    path('signup/', views.signupView, name='signup'),
    path('login/', views.loginView, name='login')
]