import axios from "axios";
const url = 'https://shielded-caverns-63372.herokuapp.com'
const viewAllDoc = async ()=>{
    return axios.get(url+'/api/home/rankDoc')
}
const meetData = async (email:string)=>{
    return axios.get(url+'/api/meet/details/'+email)
}
export {viewAllDoc,meetData};