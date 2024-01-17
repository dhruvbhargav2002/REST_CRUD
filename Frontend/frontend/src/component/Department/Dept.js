import react ,{useEffect,useState} from 'react';
import {Table} from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import {getDepartment,deleteDepartment} from '../../services/Department/DepartmentServices';
import AddDepartmentModal from './AddDepartmentModal';
import UpdateDepartmentModal from './UpdateDepartmentModal';
const Dept=()=>{
    const [department,setDepartment]=useState([]);
    const [addModalShow,setAddModalShow]=useState(false);
    const [editModalShow,setEditModalShow]=useState(false);
    const [editDepartment,setEditDepartment]=useState([])
    const [isUpdated,setIsUpdated]= useState(false)
    
    useEffect(()=>{
        let mounted=true;
        if (department.length && !isUpdated){
            return ;
        }
        getDepartment()
        .then(data=>{
            if (mounted){
                setDepartment(data.data);

            }
        })
        return ()=> {mounted=false;setIsUpdated(false)}
    },[isUpdated,department]);

    const handleAdd=(e)=>{
        e.preventDefault();
        setAddModalShow(true);
    }
    const handleUpdate=(e,dept)=>{
        e.preventDefault();
        setEditModalShow(true);
        setEditDepartment(dept)
    }
    const handleDelete=(e,id)=>{
        if (window.confirm("Are you sure to delete?")){
            e.preventDefault();
            deleteDepartment(id)
            .then((result)=>{
                alert("Department Deleted")
            },
            (error)=>{
                alert("Failed to delete")
            }
            )
        }
    }
    let AddModalClose=()=>setAddModalShow(false)
    let EditModalClose=()=>setEditModalShow(false)

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Department Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {department.map((dept)=>
                <tr key={dept.id}>
                <td>{dept.id}</td>
                <td>{dept.name}</td>
                <td><Button className='mr-2' variant="primary" onClick={event=> handleUpdate(event,dept)}>Edit</Button>{''}
                <UpdateDepartmentModal show={editModalShow} onHide={EditModalClose} department={editDepartment} setupdated={setIsUpdated}></UpdateDepartmentModal></td>
                <td><Button className='mr-2' variant="danger" onClick={event=> handleDelete(event,dept.id)}>Delete</Button>{''}</td>
                </tr>
                )}   
                </tbody>
            </Table>
            <ButtonToolbar>
                <Button className='mr-2' variant="success" onClick={handleAdd}>Add User</Button>{''}
                <AddDepartmentModal show={addModalShow} onHide={AddModalClose} setupdated={setIsUpdated}></AddDepartmentModal>
            </ButtonToolbar>
        </div>
        
    )
}
export default Dept;