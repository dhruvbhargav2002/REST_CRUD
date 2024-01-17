import React,{useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import {getEmploye} from '../../services/Employe/EmployeServices';
const Employe=()=>{
    const [employe,setEmploye]=useState([])
    useEffect(()=>{
        let mounted=true;
        getEmploye()
        .then(data=>{
            if (mounted){
                setEmploye(data.data)
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
                    <th>Employe Name</th>
                    <th>Deaprtment Name</th>
                    <th>Manager ID</th>
                    </tr>
                </thead>
                <tbody>
                {employe.map((empl)=>
                <tr key={empl.id}>
                <td>{empl.id}</td>
                <td>{empl.name}</td>
                <td>{empl.department}</td>
                <td>{empl.manager_id}</td>
                </tr>
                )}   
                </tbody>
            </Table>
        </div>
        
    )
}
export default Employe;