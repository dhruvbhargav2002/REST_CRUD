import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import {addEmploye} from '../../services/Employe/EmployeServices'
const AddEmployeModal=(props)=>{
    const handleSubmit=(e)=>{
        e.preventDefault()
        addEmploye(e.target)
        .then((result)=>{
            alert("Successfully added employe");
            props.setupdated(true)
        },
        (error)=>{
            alert("Unsuccessfull in adding employe");
        }
        )
    };
    return(
        <div className="Container">
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Employe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" name="id" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="emplname">
                                    <Form.Label>Employe Name</Form.Label>
                                    <Form.Control type="text" name="emplname" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="deptname">
                                    <Form.Label>Department Name</Form.Label>
                                    <Form.Control type="text" name="deptname" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="manager_id">
                                    <Form.Label>Manager ID</Form.Label>
                                    <Form.Control type="text" name="manager_id" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>
                </Modal.Footer>
        </Modal>
        </div>
    )
}
export default AddEmployeModal;