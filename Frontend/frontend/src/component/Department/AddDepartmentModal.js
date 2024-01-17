import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import {addDepartment} from '../../services/Department/DepartmentServices'
const AddDepartmentModal=(props)=>{
    const handleSubmit=(e)=>{
        e.preventDefault()
        addDepartment(e.target)
        .then((result)=>{
            alert("Successfully added department");
            props.setupdated(true)
        },
        (error)=>{
            alert("Unsuccessfull in adding department");
        }
        )
    };
    return(
        <div className="Container">
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Add Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" name="id" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="name">
                                    <Form.Label>Department Name</Form.Label>
                                    <Form.Control type="text" name="name" required placeholder="" />
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
export default AddDepartmentModal;