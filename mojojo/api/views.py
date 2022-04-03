from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .tweets import TwitterClient
from .forms import UserForm

#TWITTER ENDPOINTS

@api_view(['POST'])
def create_tweet(request):
	client = TwitterClient()
	client.create_tweet(request.data.get('tweet'))
	return Response({"message": "Successfully posted", "tweet": request.data.get('tweet')}, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def delete_tweet(request):
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.delete_tweet(request.GET.get('id', 0))
	return Response({"message": "Successfully deleted", "tweet": tweet}, status=status.HTTP_200_OK)

@api_view(['POST'])
def like_tweet(request):
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.like_tweet(request.GET.get('id', 0))
	return Response({"message": "Successfully liked.", "tweet": tweet}, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def unlike_tweet(request):
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.unlike_tweet(request.GET.get('id', 0))
	return Response({"message": "Successfully unliked.", "tweet": tweet}, status=status.HTTP_200_OK)

@api_view(['GET'])
def see_likes(request):
	client = TwitterClient()
	return Response({"likes": client.get_liked_tweets(request.GET.get('user', 0))}, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def unretweet(request):
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.unretweet(request.GET.get('id', 0))
	return Response({"message": "Successfully unretweeted.", "tweet": tweet}, status=status.HTTP_200_OK)

@api_view(['POST'])
def retweet(request):
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.retweet(request.GET.get('id', 0))
	return Response({"message": "Successfully retweeted.", "tweet": tweet}, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def unfollow(request):
	client = TwitterClient()
	client.unfollow(request.GET.get('user', 0))
	return Response({"message": "Successfully unfollowed.", "user": request.GET.get('user', 0)}, status=status.HTTP_200_OK)

@api_view(['POST'])
def follow(request):
	client = TwitterClient()
	client.follow(request.GET.get('user', 0))
	return Response({"message": "Successfully followed.", "user": request.GET.get('user', 0)}, status=status.HTTP_200_OK)

@api_view(['GET'])
def search(request):
	client = TwitterClient()
	return Response({"tweets": client.search_recent(request.GET.get('query', ""))}, status=status.HTTP_200_OK)


#ADMIN ENDPOINTS

@api_view(['POST'])
def new_user(request):
	form = UserForm(request.POST)
	instance = form.save(commit=False)
	instance.save()
	return Response({"message": "Successfully created.", "user": request.GET.get('user', 0)}, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def delete_user(request):
	user = request.GET.get('user', 0)
	User.objects.filter(username=user).delete()
	return Response({"message": "Successfully deleted.", "user": request.GET.get('user', 0)}, status=status.HTTP_200_OK)