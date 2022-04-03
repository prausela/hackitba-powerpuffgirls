import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Navigation from './Navigation';
import UserAndPassword from './Forms';
import {Switch, Route, useHistory} from 'react-router-dom';

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
          <Route path="/topics">
            Topics
          </Route>
          <Route path="/home">
            Home
          </Route>
          <Route path="/">
            <Container className="w-50 pt-5">
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
