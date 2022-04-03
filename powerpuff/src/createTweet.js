import React, {useState} from 'react';
import {Button, Card, Container, Form} from 'react-bootstrap';

const CreateTweet = () =>{
    return(
    <div>
        <Container className='pt-3'>
            <Form.Control type="text" placeholder="What's on your mind?" />
            <br />
            <div className="px-1 d-grid gap-1 pt-1 flex-grow-1">
                <Button variant="primary" size="lg" flex>
                    Post
                </Button>
            </div>
        </Container>
    </div>
    )}
export default CreateTweet;
