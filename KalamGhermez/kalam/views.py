from django.shortcuts import render
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from django.contrib.auth import authenticate
from django.contrib import messages
from django.http import HttpResponse, HttpResponseRedirect
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import send_mail
from .tokens import account_activation_token
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_bytes, force_str

#from django.views import generic
#from django.contrib.auth.forms import UserCreationForm
#from django.contrib.auth.hashers import make_password, check_password

# Create your views here.

# needs work
def sendActivationEmail(request, username): 
    user = User.objects.get(username=username)
    mail_subject = 'Activate your user account.'
    message = render_to_string('../templates/activate_email.html', {
        'user': user.username,
        'domain': get_current_site(request).domain,
        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
        'token': account_activation_token.make_token(user),
        'protocol': 'https' if request.is_secure() else 'http'
    })
    if send_mail(
        mail_subject,
        message, 
        'TorshiKalamGhermez@Gmail.com',
        [user.email],
        fail_silently=False,
    ):
        messages.success(request, f'Dear {user},     please go to you email {user.email} inbox and click on \
       received activation link to confirm and complete the registration. Note: Check your spam folder.')
    else:
        messages.error(request, f'Problem sending confirmation email to {user.email}, check if you typed it correctly.')

# needs work
def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        messages.success(request, 'Thank you for your email confirmation. Now you can login your account.')
    else:
        messages.error(request, 'Activation link is invalid!')

"""
# needs work

def signupView(request):
    if request.method == 'POST':
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
        sendActivationEmail(request, user)
        success_url = reverse_lazy('login')
    else:
        pass
        #form = SignUpForm
    return render(request, 'index.html')
# needs work
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
"""
