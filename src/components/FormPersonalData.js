import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, Modal } from "react-bootstrap"
import Datepicker from "react-datepicker"

const FormPersonalData = () => {
    const date = new Date();
    const currentYear = date.getFullYear();

    const [NPM, setNPM] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if(form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            setShow(true);
        }
        setValidated(true);
    };

    const age = currentYear - parseInt(birthdate.slice(0,4));

    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center my-5">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formNPM">
                            <Form.Control  
                                placeholder="NPM"
                                maxLength="9"
                                onChange={(e) => setNPM(e.target.value)}
                                onKeyPress={(e) => {if (!/[0-9]/.test(e.key)) e.preventDefault();}} 
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Control 
                                type="text" 
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formMiddleName">
                            <Form.Control 
                                type="text" 
                                placeholder="Middle Name"
                                onChange={(e) => setMiddleName(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Control 
                                type="text" 
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBirthdate">
                        <input
                            placeholder="YYYY-MM-DD"
                            type="text"
                            class="form-control datepicker"
                            name="Birthdate"
                            onChange={(e) => setBirthdate(e.target.value)}
                            required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton className="d-flex justify-content-center">
                        <Modal.Title>Form Mahasiswa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                            <Col xs="3">NPM</Col>
                            <Col xs="1">:</Col>
                            <Col>{NPM}</Col>
                            </Row>
                            <Row>
                            <Col xs="3">Fullname</Col>
                            <Col xs="1">:</Col>
                            <Col>
                                {firstName} {middleName} {lastName}
                            </Col>
                            </Row>
                            <Row>
                            <Col xs="3">Age</Col>
                            <Col xs="1">:</Col>
                            <Col>{age}{" years old"}</Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        </Container>
    )
}

export default FormPersonalData;