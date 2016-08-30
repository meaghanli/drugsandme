from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^alcohol/$', views.alcohol, name='alcohol'),
    url(r'^mdma/$', views.mdma, name='mdma'),
]
