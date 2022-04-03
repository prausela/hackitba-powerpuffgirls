import tweepy

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
		self.bearer_token = bearer_token
		self.client = tweepy.Client(consumer_key=self.consumer_key,
			consumer_secret=self.consumer_secret,
			access_token=self.access_token,
			access_token_secret=self.access_token_secret,
			bearer_token=self.bearer_token)

	def create_tweet(self,text):
		self.client.create_tweet(text=text)

	def delete_tweet(self,id):
		self.client.delete_tweet(id=id)

	def unretweet(self,id):
		self.client.unretweet(source_tweet_id=id)

	def like_tweet(self,id):
		self.client.like(tweet_id=id)

	def unlike_tweet(self,id):
		self.client.unlike(tweet_id=id)

	def get_liked_tweets(self,user):
		u = self.client.get_user(username=user)
		return self.client.get_liked_tweets(id=u.data.id)

	def search_recent(self,term):
		return self.client.search_recent_tweets(query=term)

	def retweet(self,id):
		self.client.retweet(tweet_id=id)

	def follow(self,user):
		u = self.client.get_user(username=user)
		self.client.follow_user(target_user_id=u.data.id)

	def unfollow(self,user):
		u = self.client.get_user(username=user)
		self.client.unfollow_user(target_user_id=u.data.id)

	def get_tweet(self,id):
		return self.client.get_tweet(id=id)

