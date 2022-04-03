from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .tweets import TwitterClient
from .models import User
from .models import Action
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
import secrets

flag_check = True

@csrf_exempt
@api_view(['POST'])
def create_tweet(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),'create_tweet')):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	client.create_tweet(request.data.get('tweet'))
	return Response({"message": "Successfully posted", "tweet": request.data.get('tweet')}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['DELETE'])
def delete_tweet(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"delete_tweet")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.delete_tweet(request.GET.get('id', 0))
	return Response({"message": "Successfully deleted", "tweet": tweet}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['POST'])
def like_tweet(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"like_tweet")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.like_tweet(request.GET.get('id', 0))
	return Response({"message": "Successfully liked.", "tweet": tweet}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['DELETE'])
def unlike_tweet(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"unlike_tweet")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.unlike_tweet(request.GET.get('id', 0))
	return Response({"message": "Successfully unliked.", "tweet": tweet}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['GET'])
def see_likes(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"see_likes")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	return Response({"likes": client.get_liked_tweets(request.GET.get('user', 0))}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['DELETE'])
def unretweet(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"unretweet")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.unretweet(request.GET.get('id', 0))
	return Response({"message": "Successfully unretweeted.", "tweet": tweet}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['POST'])
def retweet(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"retweet")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	tweet = client.get_tweet(request.GET.get('id', 0))
	client.retweet(request.GET.get('id', 0))
	return Response({"message": "Successfully retweeted.", "tweet": tweet}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['DELETE'])
def unfollow(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"unfollow")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	client.unfollow(request.GET.get('user', 0))
	return Response({"message": "Successfully unfollowed.", "user": request.GET.get('user', 0)}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['POST'])
def follow(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"follow")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	client.follow(request.GET.get('user', 0))
	return Response({"message": "Successfully followed.", "user": request.GET.get('user', 0)}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['GET'])
def search(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"search")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	return Response({"tweets": client.search_recent(request.GET.get('query', ""))}, status=status.HTTP_200_OK)

@api_view(['GET'])
def see_user_tweets(request):
	if(flag_check):
		if(not check_credentials(request.data.get('username'),request.data.get('token'),"see_user_tweets")):
			return Response({"message": "Not authorized to perform this action"}, status=status.HTTP_403_FORBIDDEN)
	client = TwitterClient()
	return Response({"tweets": client.see_user_tweets(request.GET.get('user', ""))}, status=status.HTTP_200_OK)


#ADMIN ENDPOINTS

@api_view(['POST'])
def new_user(request):
	us = request.data.get('username')
	ps = secrets.token_hex(16)
	dt = request.data.get('expiration')
	reg = User.objects.create(username=us, expiration=dt, password=ps)
	for a in request.data.get('actions').split(","):
		reg.actions.add(Action.objects.filter(name=a)[0])
	return Response({"message": "Successfully created.", "user": request.GET.get('user', 0)}, status=status.HTTP_200_OK)

@api_view(['DELETE'])
def delete_user(request):
	user = request.GET.get('user', 0)
	User.objects.filter(username=user).delete()
	return Response({"message": "Successfully deleted.", "user": request.GET.get('user', 0)}, status=status.HTTP_200_OK)

@api_view(['GET'])
def show_actions(request):
	return Response({serializers.serialize('json', Action.objects.all())}, status=status.HTTP_200_OK)


@api_view(['GET'])
def show_users(request):
	return Response({serializers.serialize('json', User.objects.all())}, status=status.HTTP_200_OK)

def check_credentials(username,token,action):
	user = User.objects.filter(username=username,password=token)
	if(len(user) != 0):
		if(user[0].actions.filter(name=action)):
			return True
	return False


