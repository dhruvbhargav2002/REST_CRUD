import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import {updateDepartment} from '../../services/Department/DepartmentServices'
const UpdateDepartmentModal=(props)=>{
    const handleSubmit=(e)=>{
        e.preventDefault()
        updateDepartment(props.department.id,e.target)
        .then((result)=>{
            alert(result);
            props.setupdated(true)

        },
        (error)=>{
            alert("Unsuccessfull in updating department");
        }
        )
    };
    return(
        <div className="Container">
        <Modal {...props}>
            <Modal.Header closeButton>
            <Modal.Title>Update Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" name="id" required defaultValue={props.department.id} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="name">
                                    <Form.Label>Department Name</Form.Label>
                                    <Form.Control type="text" name="name" required defaultValue={props.department.name} placeholder="" />
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
export default UpdateDepartmentModal;