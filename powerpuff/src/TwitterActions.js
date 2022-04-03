import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Switch, Route, useHistory} from 'react-router-dom';
import ViewTweets from './viewTweets';
import CreateTweet from './createTweet';
import DeleteTweets from './deleteTweets';

const TwitterActions = () =>{

    const history = useHistory(); 
    const handleClick = (p) => history.push(p)

    return(
        <div>
            <Switch>
                <Route path="/">
                    <div className="px-1 d-grid gap-1 pt-1 flex-grow-1">
                        <Button variant="primary" size="lg" onClick={() => handleClick("/view_tweets")}>
                            View Tweets
                        </Button>
                        <Button variant="primary" size="lg" onClick={() => handleClick("/create_tweet")}>
                            Create Tweet
                        </Button>
                        <Button variant="primary" size="lg" onClick={() => handleClick("/delete_tweets")}>
                            Delete Tweets
                        </Button>
                    </div>
                </Route>
                <Route path="/view_tweets">
                    <ViewTweets/>
                </Route>
                <Route path="/create_tweet">
                    <CreateTweet/>
                </Route>
                <Route path="/delete_tweets">
                    <DeleteTweets/>
                </Route>
            </Switch>
        </div>
    )}

export default TwitterActions;
