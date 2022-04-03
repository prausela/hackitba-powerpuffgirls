import React from 'react';
import {Accordion, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const userArray = [["Name 0", 0], ["Name 1", 1], ["Name 2", 2], ["Name 3", 3], ["Name 4", 4]];

const HomeAdmin = () => {

    const handleClick = () => addUser()
    const addUser = () => userArray = [["Name 0", 0], ["Name 1", 1], ["Name 2", 2], ["Name 3", 3], ["Name 4", 4]];
    const history = useHistory(); 
    const Twitter = () => history.push("/twitter")

    return(
    <>
        <h1 className="px-5 pt-4">
            User List
        </h1>
            <div className="w-100 px-5 pt-2">
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
            <div className="px-1 d-flex flex-grow-1">
                <div className="px-1 d-grid gap-1 pt-3 flex-grow-1">
                    <Button variant="primary" size="lg" onClick={Twitter}>
                        Twitter
                    </Button>
                    <Button variant="primary" size="lg" onClick={Twitter}>
                        Facebook
                    </Button>
                </div>
                <div className="px-1 d-grid gap-1 pt-3 flex-grow-1">
                    <Button variant="primary" size="lg" onClick={Twitter}>
                        Instagram
                    </Button>
                    <Button variant="primary" size="lg" onClick={Twitter}>
                        LinkedIn
                    </Button>
                </div>
            </div>
    </>
)}


export default HomeAdmin;
