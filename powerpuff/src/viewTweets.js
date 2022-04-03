import React, {useState} from 'react';
import {Card, Button, FormControl, InputGroup} from 'react-bootstrap';

const TwitterArray = [
    {
        id: 1,
        username: '@user1',
        text: 'text1',
        timestamp: '03-04-22 7:38:25'
    }, {
        id: 2,
        username: '@user2',
        text: 'text2',
        timestamp: '03-04-22 7:38:25'
    }, {
        id: 3,
        username: '@user3',
        text: 'text3',
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
    }, {
        id: 6,
        username: '@user1',
        text: 'text1',
        timestamp: '03-04-22 7:38:25'
    }]

const ViewTweets = () =>{

    return(
    <>
    {/* If puede buscar */}
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
                <Card.Body className="w-50 px-3">
                    {/*<Card.Title>Special title treatment</Card.Title>*/}
                    <Card.Text>
                        {item['text']}
                    </Card.Text>
                    {item['timestamp']}
                </Card.Body>
            </Card>
        )})}
    </div>
    </>
    )}

export default ViewTweets;

