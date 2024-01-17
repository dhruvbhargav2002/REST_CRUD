import react ,{useEffect,useState} from 'react';
import {Table} from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import {getEmploye,deleteEmploye} from '../../services/Employe/EmployeServices';
import AddEmployeModal from './AddEmployeModal';
import UpdateEmployeModal from './UpdateEmployeModal';
const Empl=()=>{
    const [employe,setEmploye]=useState([]);
    const [addModalShow,setAddModalShow]=useState(false);
    const [editModalShow,setEditModalShow]=useState(false);
    const [editEmploye,setEditEmploye]=useState([])
    const [isUpdated,setIsUpdated]= useState(false)
    
    useEffect(()=>{
        let mounted=true;
        if (employe.length && !isUpdated){
            return ;
        }
        getEmploye()
        .then(data=>{
            if (mounted){
                setEmploye(data.data);

            }
        })
        return ()=> {mounted=false;setIsUpdated(false)}
    },[isUpdated,employe]);

    const handleAdd=(e)=>{
        e.preventDefault();
        setAddModalShow(true);
    }
    const handleUpdate=(e,empl)=>{
        e.preventDefault();
        setEditModalShow(true);
        setEditEmploye(empl)
    }
    const handleDelete=(e,id)=>{
        if (window.confirm("Are you sure to delete?")){
            e.preventDefault();
            deleteEmploye(id)
            .then((result)=>{
                alert("Employe Deleted")
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
                    <th>Employe Name</th>
                    <th>Department Name</th>
                    <th>Manager ID</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {employe.map((empl)=>
                <tr key={empl.id}>
                <td>{empl.id}</td>
                <td>{empl.name}</td>
                <td>{empl.department}</td>
                <td>{empl.manager_id}</td>
                <td><Button className='mr-2' variant="primary" onClick={event=> handleUpdate(event,empl)}>Edit</Button>{''}
                <UpdateEmployeModal show={editModalShow} onHide={EditModalClose} employe={editEmploye} setupdated={setIsUpdated}></UpdateEmployeModal></td>
                <td><Button className='mr-2' variant="danger" onClick={event=> handleDelete(event,empl.id)}>Delete</Button>{''}</td>
                </tr>
                )}   
                </tbody>
            </Table>
            <ButtonToolbar>
                <Button className='mr-2' variant="success" onClick={handleAdd}>Add User</Button>{''}
                <AddEmployeModal show={addModalShow} onHide={AddModalClose} setupdated={setIsUpdated}></AddEmployeModal>
            </ButtonToolbar>
        </div>
        
    )
}
export default Empl;