from django.shortcuts import render
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from django.contrib.auth import authenticate
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
#from django.views import generic
#from django.contrib.auth.forms import UserCreationForm
#from django.contrib.auth.hashers import make_password, check_password

# Create your views here.

def signupView(request):
    if request.method == 'POST':
        #firstName = request.POST['firstName']
        #lastName = request.POST['lastName']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        #passwordRepeat = request('passwordRepeat')
        if User.objects.get(username=username):
            messages.error(request, 'username has already been taken')
            #return HttpResponseRedirect(reverse('kalam:index'))
        user = User.objects.create_user(username, email, password)
        user.is_active = False
        user.save()
        #activateEmail(request, user, email) #why email ???
        success_url = reverse_lazy('login')
    else:
        pass
        #form = SignUpForm
    return render(request, 'index.html')

def loginView(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is None:
            messages.error(request, 'incorrect password or username')
            #return HttpResponseRedirect(reverse('kalam:index')) ????
        elif user.is_active == False:
            messages.error(request, 'first you must verify your email')
            #return HttpResponseRedirect(reverse('kalam:index')) ????
        else:
            messages.success(request, 'you\'ve logged in')
            #return index(request)
    else:
        pass
    return render(request, 'login.html')
