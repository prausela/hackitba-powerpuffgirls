import React, {useState} from 'react';
import {Button, Container, Form, InputGroup, FormControl} from 'react-bootstrap';

const CreateTweet = () =>{
    return(
    <div>
        <Container className='pt-3'>
        <Form>
        <InputGroup>
            <FormControl as="textarea" placeholder="What's on your mind?" />
        </InputGroup>
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
