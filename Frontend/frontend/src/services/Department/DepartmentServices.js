import axios from "axios";
export function getDepartment(){
    return axios.get("http://127.0.0.1:8000/department")
    .then(response=>response.data)
}
export function addDepartment(department){
    return axios.post("http://127.0.0.1:8000/department",{
        id:department.id.value,
        name:department.name.value,
    })
    .then(response=>response.data)
}
export function updateDepartment(id,department){
    return axios.put("http://127.0.0.1:8000/department/update/"+id,{
        id:department.id.value,
        name:department.name.value,
    })
    .then(response=>response.data)
}
export function deleteDepartment(id){
    return axios.delete("http://127.0.0.1:8000/department/delete/"+id,{
        method:"Delete",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        }
    })
    .then(response=>response.data)
}