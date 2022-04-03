import React, {useState} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';

const newUser = () =>{

    return(
        <Container>
            <Form>
                <Form.Control type="text" placeholder="Readonly input here..." readOnly />
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
                    <Form.Label column sm="2">
                        Username
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="username" placeholder="username" />
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    )}

export default newUser;