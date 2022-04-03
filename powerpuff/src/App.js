import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Navigation from './Navigation';
import UserAndPassword from './Forms';

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    return setCount(count+1);
  }
  return (
    <>
      <header>
        <Navigation p={"hola"}/>
      </header>
      <main>
        {/*count*/}
        {/*<Button onClick={incrementCounter}/>*/}
        <Container className="w-50 pt-5">
          <Card >
            <Card.Header>Welcome</Card.Header>
            <Card.Body>
              <UserAndPassword/>
              <Button variant="primary">Log In</Button>
            </Card.Body>
          </Card>
        </Container>
      </main>
      <footer>

      </footer>
      
    </>
  );
}

export default App;
