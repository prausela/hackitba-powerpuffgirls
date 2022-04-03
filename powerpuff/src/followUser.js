import React, {useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';

const FollowUser = () =>{
    return(
    <div>
        <Container className='pt-3'>
        <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="@username" />
            </Form.Group>
            <br />
            <div className="px-1 d-grid flex-grow-1">
                <Button type="submit" variant="primary" size="lg" flex>
                    Follow User
                </Button>
            </div>
            </Form>
        </Container>
    </div>
    )}
export default FollowUser;
