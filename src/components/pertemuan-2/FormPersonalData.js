import React, { useState } from "react";
import { Container, Modal, Form, Table, ButtonGroup, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormPersonalData = () => {
    var today = new Date();
    const currDate = formatDate(today);
    const objProfile = {
        npm: 0,
        fname: "",
        mname: "",
        lname: "",
        birthdate: currDate,
    };

    const [profile, setProfile] = useState([objProfile]);
    const [mymodal, setMymodal] = useState({
        show: false,
        message: "",
    });

    const RowForm = ({ data, index }) => {
        return (
            <tr>
                <td>
                    <Form.Control
                        placeholder="NPM"
                        maxLength="9"
                        pattern="^[0-9]*$"
                        defaultValue={data.npm ? data.npm : ''}
                        onChange={(e) =>
                            setProfile((prev) => {
                                const newdata = [...prev];
                                newdata[index].npm = parseInt(e.target.value);
                                return newdata;
                            })}
                        required
                    />
                </td>
                <td>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        defaultValue={data.fname}
                        onChange={(e) =>
                            setProfile((prev) => {
                                const newdata = [...prev];
                                newdata[index].fname = e.target.value;
                                return newdata;
                            })}
                        required
                    />
                </td>
                <td>
                    <Form.Control
                        type="text"
                        placeholder="Middle Name"
                        defaultValue={data.mname}
                        onChange={(e) =>
                            setProfile((prev) => {
                                const newdata = [...prev];
                                newdata[index].mname = e.target.value;
                                return newdata;
                            })}
                        required
                    />
                </td>
                <td>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        defaultValue={data.lname}
                        onChange={(e) =>
                            setProfile((prev) => {
                                const newdata = [...prev];
                                newdata[index].lname = e.target.value;
                                return newdata;
                            })}
                        required
                    />
                </td>
                <td>
                    <DatePicker
                        selected={new Date(data.birthdate)}
                        onChange={(value) =>
                            setProfile((prev) => {
                                const newdata = [...prev];
                                newdata[index].birthdate = formatDate(value);
                                return newdata;
                            })
                        }
                        className="form-control datepicker"
                        placeholder="Choose Date"
                        required
                    />
                </td>
                {index ? (
                    <td>
                        <Button
                            variant="danger"
                            type="button"
                            onClick={(e) =>
                                setProfile((prev) => {
                                    const newdata = [...prev];
                                    delete newdata[index];
                                    return newdata;
                                })
                            }
                        >
                            Remove
                        </Button>
                    </td>
                ) : (
                    <td></td>
                )

                }
            </tr>
        );
    };

    const result = (data) => {
        return (
            <div>
                {data.map((v, index) =>
                    v ? (
                        <div className="profile border-bottom" key={index}>
                            <p className="text-dark">NPM: {v.npm}</p>
                            <p className="text-dark">Fullname: {v.fname} {v.mname} {v.lname} </p>
                            <p className="text-dark">Birthdate: {v.birthdate}</p>
                            <p className="text-dark">Age: {calculateAge(v.birthdate)} years old</p>
                        </div>
                    ) : (
                        ''
                    )
                )}
            </div>
        );
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        let myresult = result(profile);
        setMymodal({ ...mymodal, show: true, message: myresult });
    };

    const modalHandleClose = () => {
        setMymodal({ ...mymodal, show: false });
    };


    return (
        <Container fluid>
            <div className="my-5">
                <Form onSubmit={(e) => handlerSubmit(e)} id="form-profile">
                    <Table>
                        <thead>
                            <tr>
                                <th>NPM</th>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Last Name</th>
                                <th>Birthdate</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profile.map((v, index) =>
                                v ? <RowForm key={index} data={v} index={index} /> : ""
                            )}

                        </tbody>
                    </Table>
                    <Button
                        variant="success"
                        type="button"
                        onClick={() =>
                            setProfile((prev) => {
                                return [...prev, objProfile];
                            })
                        }>
                        Add new row
                    </Button>

                    <div className="float-end">
                        <ButtonGroup className="mb-2">
                            <Button variant="light" type="reset">Clear</Button>
                            <Button variant="primary" type="submit" className="btn-submit">Submit</Button>
                        </ButtonGroup>
                    </div>
                </Form>
            </div>
            <ModalPopUP show={mymodal.show} handleClose={modalHandleClose} message={mymodal.message}/>
        </Container>
    );
}

const formatDate = (datestring) => {
    const today = new Date(datestring);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return yyyy + "-" + mm + "-" + dd;
};

const calculateAge = (birthdate) => {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

const ModalPopUP = ({ show, handleClose, message }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
        </Modal>
    );
};

export default FormPersonalData;