import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import {updateEmploye} from '../../services/Employe/EmployeServices'
const UpdateEmployeModal=(props)=>{
    const handleSubmit=(e)=>{
        e.preventDefault()
        updateEmploye(props.employe.id,e.target)
        .then((result)=>{
            alert(result);
            props.setupdated(true)

        },
        (error)=>{
            alert("Unsuccessfull in updating employe");
        }
        )
    };
    return(
        <div className="Container">
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Update Employe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" name="id" required defaultValue={props.employe.id} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="emplname">
                                    <Form.Label>Employe Name</Form.Label>
                                    <Form.Control type="text" name="emplname" required defaultValue={props.employe.name} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="deptname">
                                    <Form.Label>Department Name</Form.Label>
                                    <Form.Control type="text" name="deptname" required defaultValue={props.employe.department} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="manager_id">
                                    <Form.Label>Employe Name</Form.Label>
                                    <Form.Control type="text" name="manager_id" required defaultValue={props.employe.manager_id} placeholder="" />
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
export default UpdateEmployeModal;