import React,{useState,useEffect }from 'react'
import "../dashboard/style.css"
import logo from "../login/LOGO.png"

import { useNavigate } from "react-router-dom";
import { verify_token_employer } from '../../api/employerapi/Employerapi';
import { useParams } from 'react-router-dom'
function Navbar() {
    const { param } = useParams();
    console.log(param)
    let navigate = useNavigate(); 
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
     };
     const onClose = () => {
        setOpen(false);
     };
     const [employer,setmployer] = useState([])
     const checkloginemoloyer =async()=>{
         try {
            var token_check = window.localStorage.getItem('employercccd');
            if(token_check !== null){
            const result = await  verify_token_employer(token_check)
   
            setmployer(result.data.data)
            window.localStorage.setItem("employerid", result.data.data.id)
            }
            else{
               navigate('/app/login');
            }
         } catch (error) {
            navigate('/app/login');
         }
     }
   
      const  logout = ()=>{
         window.localStorage.removeItem('employercccd');
         window.localStorage.removeItem('employerid')
         navigate('/app/login')
      }
      
     useEffect(() => {
       checkloginemoloyer();
      }, []);
  return (
    <>
    

    </>
  )
}

export default Navbar