import React, {useState} from 'react';
import {Container, Dropdown, Row, Col, Form} from 'react-bootstrap';

const NewUser = () =>{
    const [dropdownValuePlataforma, setDropdownValuePlataforma] = useState("Plataforma");
    const [dropdownValuePermiso, setDropdownValuePermiso] = useState("Permiso");
    return(
        <div>
            <Container>
                <Form>
                    <Form.Group as={Row} className="mb-3 pt-4" controlId="formPlaintextUser">
                        <Form.Label column sm="2">
                            Username
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="username" placeholder="username" />
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
            <Container className='d-flex'>
                <div className='d-flex flex-grow-1'>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic"  className='w-100'>
                            {dropdownValuePlataforma}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setDropdownValuePlataforma("Instagram")}>Instagram</Dropdown.Item>
                            <Dropdown.Item onClick={() => setDropdownValuePlataforma("Twitter")}>Twitter</Dropdown.Item>
                            <Dropdown.Item onClick={() => setDropdownValuePlataforma("Facebook")}>Facebook</Dropdown.Item>
                            <Dropdown.Item onClick={() => setDropdownValuePlataforma("LinkedIn")}>LinkedIn</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='d-flex flex-grow-1 pb-2'>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic"  className='w-100'>
                        {dropdownValuePermiso}
                    </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setDropdownValuePermiso("View Tweets")}>View Tweets</Dropdown.Item>
                            <Dropdown.Item onClick={() => setDropdownValuePermiso("Create Tweet")}>Create Tweet</Dropdown.Item>
                            <Dropdown.Item onClick={() => setDropdownValuePermiso("Retweet")}>Retweet</Dropdown.Item>
                            <Dropdown.Item onClick={() => setDropdownValuePermiso("Like Tweet")}>Like Tweet</Dropdown.Item>
                            <Dropdown.Item onClick={() => setDropdownValuePermiso("Delete Tweet")}>Delete Tweet</Dropdown.Item>
                            <Dropdown.Item onClick={() => setDropdownValuePermiso("Follow User")}>Follow User</Dropdown.Item>
                            <Dropdown.Item onClick={() => setDropdownValuePermiso("Unfollow User")}>Unfollow User</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Container>
        </div>


    )}

export default NewUser;