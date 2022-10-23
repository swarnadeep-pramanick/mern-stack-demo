import React,{ useState,useEffect  } from "react";

import UserList from "../components/usersList";
import Backdrop from '@mui/material/Backdrop';
import {  toast } from 'react-toast'
import { all_users } from '../../urls/urls'
import axios from 'axios';


const Users = () => {
    const [loading,setLoading] = useState(false)
    const [users,setUsers] = useState([])
    useEffect(() => {
        getUser()
    },[])
    const getUser = async() => {
        setLoading(true)
        const response = await axios.get(all_users)
        console.log(response)
        if(response.status === 200){
            const res = await response.data
            setUsers(res.users)
            setLoading(false)
        }
        else{
            const res = await response.json()
            setLoading(false)
            toast.error(res.message)
        }
    }

    return (
        <React.Fragment>
            {!loading && users.length > 0 ? <UserList items={users} /> :null}
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            // onClick={handleClose}
            ></Backdrop>
        </React.Fragment>
           
                
        
    )
} 

export default Users