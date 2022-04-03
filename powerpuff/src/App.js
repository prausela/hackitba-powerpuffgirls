import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Navigation from './Navigation';
import UserAndPassword from './UserAndPassword';
import {Switch, Route, useHistory} from 'react-router-dom';
import TwitterService from './services/twitterService';
import HomeAdmin from './HomeAdmin';
import ViewTweets from './viewTweets';
import CreateTweet from './createTweet';
import TwitterActions from './TwitterActions';
import DeleteTweets from './deleteTweets';
import FollowUser from './followUser';
import UnfollowUser from './unfollowUser';

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => setCount(count+1)
  
  const [name, setName] = useState("");
  const history = useHistory(); 
  const handleClick = () => history.push("/home")

  return (
    <>
      <header>
        <Navigation p={"hola"}/>
      </header>
      <main>
        {/*count*/}
        {/*<Button onClick={incrementCounter}/>*/}
        <Switch>
          <Route path="/about">
            about
          </Route>
          <Route path="/twitter">
            <TwitterActions/>
          </Route>
          <Route path="/home">
            <HomeAdmin/>
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
          <Route path="/follow_user">
            <FollowUser/>
          </Route>
          <Route path="/unfollow_user">
            <UnfollowUser/>
          </Route>
          <Route path="/">
            <Container className="w-75 pt-5">
              <Card >
                <Card.Header>Welcome</Card.Header>
                <Card.Body>
                  <UserAndPassword setName={setName} name={name}/>
                  <Button variant="primary" onClick={handleClick}>Log In</Button>
                </Card.Body>
              </Card>
            </Container>
          </Route>
        </Switch>
        
      </main>
      <footer>

      </footer>
      
    </>
  );
}

export default App;
