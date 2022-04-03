"""twitter_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('twitter/create_tweet', views.create_tweet, name='create_tweet'),
    path('twitter/delete_tweet', views.delete_tweet, name='delete_tweet'),
    path('twitter/like', views.like_tweet, name='like_tweet'),
    path('twitter/unlike', views.unlike_tweet, name='unlike_tweet'),
    path('twitter/likes', views.see_likes, name='see_likes'),
    path('twitter/unretweet', views.unretweet, name='unretweet'),
    path('twitter/retweet', views.retweet, name='retweet'),
    path('twitter/follow', views.follow, name='follow'),
    path('twitter/unfollow', views.unfollow, name='unfollow'),
    path('twitter/search', views.search, name='search'),
    path('new_user', views.new_user, name='new_user')

]
