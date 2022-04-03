import React, { useState } from 'react';
import {Accordion, Container, Button} from 'react-bootstrap';

const userArray = [["Name 0", 0], ["Name 1", 1], ["Name 2", 2], ["Name 3", 3], ["Name 4", 4]];

const handleClick = () => addUser()
const addUser = () => userArray = [["Name 0", 0], ["Name 1", 1], ["Name 2", 2], ["Name 3", 3], ["Name 4", 4]];
const TwitterAPI = () => {}

const HomeAdmin = () => {
    return(
    <>
        <h1 className="px-5 pt-4">
            User List
        </h1>
        <div className="d-flex">
            <div className="w-50 px-5 pt-2">
                <Accordion>
                    {userArray.map((item) => {
                    return(
                    <Accordion.Item eventKey={item[1]}>
                        <Accordion.Header>{item[0]}</Accordion.Header>
                        <Accordion.Body>
                        {item[1]}
                        </Accordion.Body>
                    </Accordion.Item>)})}
                </Accordion>
                <div className="d-grid gap-2 pt-3">
                    <Button variant="primary" size="lg">
                        New User
                    </Button>
                </div>
            </div>
            <div className="px-1 d-flex flex-grow-1 pe-5">
                <div className="px-1 pr-5 d-grid gap-1 pt-3 flex-grow-1">
                    <Button variant="primary" size="lg">
                        Twitter
                    </Button>
                    <Button variant="primary" size="lg">
                        Facebook
                    </Button>
                </div>
                <div className="px-1 pr-5 d-grid gap-1 pt-3 flex-grow-1">
                    <Button variant="primary" size="lg">
                        Instagram
                    </Button>
                    <Button variant="primary" size="lg">
                        LinkedIn
                    </Button>
                </div>
            </div>
        </div>
    </>
)}


export default HomeAdmin;
