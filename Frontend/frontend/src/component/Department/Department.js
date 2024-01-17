import React,{useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import {getDepartment} from '../../services/Department/DepartmentServices';
const Department=()=>{
    const [department,setDepartment]=useState([])
    useEffect(()=>{
        let mounted=true;
        getDepartment()
        .then(data=>{
            if (mounted){
                setDepartment(data.data)
            }
        })
        return ()=> mounted=false;
    },[])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Department Name</th>
                    </tr>
                </thead>
                <tbody>
                {department.map((dept)=>
                <tr key={dept.id}>
                <td>{dept.id}</td>
                <td>{dept.name}</td>
                </tr>
                )}   
                </tbody>
            </Table>
        </div>
        
    )
}
export default Department;