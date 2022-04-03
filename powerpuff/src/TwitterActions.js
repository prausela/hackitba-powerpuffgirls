import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Switch, Route, useHistory} from 'react-router-dom';
import viewTweets from './viewTweets';
import createTweet from './createTweet';

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
                    </div>
                </Route>
                <Route path="/view_tweets">
                    <viewTweets/>
                </Route>
                <Route path="/create_tweet">
                    <createTweet/>
                </Route>
            </Switch>
        </div>
    )}

export default TwitterActions;
