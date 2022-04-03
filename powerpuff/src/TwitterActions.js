import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Switch, Route, useHistory} from 'react-router-dom';
import ViewTweets from './viewTweets';
import CreateTweet from './createTweet';
import DeleteTweets from './deleteTweets';
import FollowUser from './followUser';
import UnfollowUser from './unfollowUser';
import Retweet from './retweet';
import LikeTweet from './likeTweet';

const TwitterActions = () =>{

    const history = useHistory(); 
    const handleClick = (p) => history.push(p)

    return(
        <div>
            <div className="px-1 d-grid gap-1 pt-1 flex-grow-1">
                <Button variant="primary" size="lg" onClick={() => handleClick("/view_tweets")}>
                    View Tweets
                </Button>
                <Button variant="primary" size="lg" onClick={() => handleClick("/create_tweet")}>
                    Create Tweet
                </Button>
                <Button variant="primary" size="lg" onClick={() => handleClick("/retweet")}>
                    Retweet
                </Button>
                <Button variant="primary" size="lg" onClick={() => handleClick("/like_tweet")}>
                    Like Tweet
                </Button>
                <Button variant="primary" size="lg" onClick={() => handleClick("/delete_tweets")}>
                    Delete Tweets
                </Button>
                <Button variant="primary" size="lg" onClick={() => handleClick("/follow_user")}>
                    Follow User
                </Button>
                <Button variant="primary" size="lg" onClick={() => handleClick("/unfollow_user")}>
                    Unfollow User
                </Button>
            </div>
        </div>
    )}

export default TwitterActions;
