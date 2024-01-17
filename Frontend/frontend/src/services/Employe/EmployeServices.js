import axios from "axios";
export function getEmploye(){
    return axios.get("http://127.0.0.1:8000/employe")
    .then(response=>response.data)
}
export function addEmploye(employe){
    return axios.post("http://127.0.0.1:8000/employe",{
        id:employe.id.value,
        name:employe.emplname.value,
        department:employe.deptname.value,
        manager_id:employe.manager_id.value 
    })
    .then(response=>response.data)
}
export function updateEmploye(id,employe){
    return axios.put("http://127.0.0.1:8000/employe/update/"+id,{
        id:employe.id.value,
        name:employe.emplname.value,
        department:employe.deptname.value,
        manager_id:employe.manager_id.value 
    })
    .then(response=>response.data)
}
export function deleteEmploye(id){
    return axios.delete("http://127.0.0.1:8000/employe/delete/"+id,{
        method:"Delete",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        }
    })
    .then(response=>response.data)
}