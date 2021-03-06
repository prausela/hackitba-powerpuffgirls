import React, {useState} from 'react';
import {Card, Button, FormControl, InputGroup} from 'react-bootstrap';

const TwitterArray = [
    {
        id: 0,
        username: '@user1',
        text: 'text1',
        timestamp: '03-04-22 7:38:25'
    }, {
        id: 1,
        username: '@user2',
        text: 'text2',
        timestamp: '03-04-22 7:38:25'
    }, {
        id: 2,
        username: '@user3',
        text: 'text3',
        timestamp: '03-04-22 7:38:25'
    }, {
        id: 3,
        username: '@user1',
        text: 'text1',
        timestamp: '03-04-22 7:38:25'
    }, {
        id: 4,
        username: '@user1',
        text: 'text1',
        timestamp: '03-04-22 7:38:25'
    }, {
        id: 5,
        username: '@user1',
        text: 'text1',
        timestamp: '03-04-22 7:38:25'
    }]

const Retweet = () =>{

    const handleClick = (id) => {/*TwitterArray.splice(id, 1);*/}

    return(
    <>
    <InputGroup className="mb-3 w-100 px-3 pt-3">
        <Button variant="outline-secondary" id="button-addon1">
            Search
        </Button>
        <FormControl
            aria-label="Search"
            aria-describedby="basic-addon1"
        />
    </InputGroup>
    <div>
        {TwitterArray.map((item) => {
                        return(
            <Card className="w-100 px-3">
                <Card.Header as="h5">{item['username']}</Card.Header>
                <div className='dflex'>
                    <Card.Body className="w-50 px-3">
                        <Card.Text>
                            {item['text']}
                        </Card.Text>
                        {item['timestamp']}
                    </Card.Body>
                    <div className='d-flex justify-content-end pb-2'>
                        <Button variant="success" onClick={() => handleClick(item['id'])}>
                            Retweet
                        </Button>
                    </div>
                </div>
            </Card>
        )})}
    </div>
    </>
    )}

export default Retweet;



