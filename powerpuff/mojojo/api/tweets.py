import tweepy
from requests_oauthlib import OAuth1Session

url = 'https://api.twitter.com/oauth/request_token'
consumer_key = "P6IUTm5Fl8tsxukCSgdAnIDDl"
consumer_secret = "kzjcp21dVrLTi0PRzZgPCu2bZBgiD4ZolJi4r84yzHtfxw5Uw1"
bearer_token = "AAAAAAAAAAAAAAAAAAAAAHMvbAEAAAAA%2BqYDsL6HNEgIEVazrmOLhNjQiiE%3Di280A9XsQqtAxZHk7ymKJ3OcwN0741zehZmfmdUdAvWvyU3pgI"
access_token = "1510244160426725378-GgTzcFUJmVURqd7lhAYjqxNDlc7gMK"
access_token_secret = "BtBfsAMX3NwnBSuf3TsOauKD1JeUPatsFq113uArvBvUn"

class TwitterClient:
	def __init__(self):
		self.consumer_key = consumer_key
		self.consumer_secret = consumer_secret
		self.access_token = access_token
		self.access_token_secret = access_token_secret
		self.client = tweepy.Client(consumer_key=self.consumer_key,
			consumer_secret=self.consumer_secret,
			access_token=self.access_token,
			access_token_secret=self.access_token_secret)

	def create_client(self):
		token = OAuth1Session(client_key=self.consumer_key,
			client_secret=self.consumer_secret)
		data = str.split((token.get(url)).text,'&')
		key = str.split(data[0], '=')
		secret = str.split(data[1], '=')
		self.access_token = key[1]
		self.access_token_secret = secret[1]
		self.client = tweepy.Client(consumer_key=self.consumer_key,
			consumer_secret=self.consumer_secret,
			access_token=self.access_token,
			access_token_secret=self.access_token_secret)

	def create_tweet(self,text):
		self.client.create_tweet(text=text)

	def delete_tweet(self,id):
		self.client.delete_tweet(id=id)

	def hide_replies(self,id):
		self.client.hide_reply(id=id)

	def unretweet(self,id):
		self.client.unretweet(source_tweet_id=id)


