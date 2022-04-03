import React, {useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';

const CreateTweet = () =>{
    return(
    <div>
        <Container className='pt-3'>
        <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="What's on your mind?" />
            </Form.Group>
            <br />
            <div className="px-1 d-grid gap-1 flex-grow-1">
                <Button type="submit" variant="primary" size="lg" flex>
                    Post
                </Button>
            </div>
            </Form>
        </Container>
    </div>
    )}
export default CreateTweet;
