import React, { useState } from 'react';
import {Form} from 'react-bootstrap';

const UserAndPassword = ({name, setName}) => {
    
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>User</Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        </Form>
    )}

export default UserAndPassword;
