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
        console.log("onec")
        getUser()
    },[])
    const getUser = async() => {
        // console.clear()
        // console.log(all_users)
        setLoading(true)
        const response = await axios.get(all_users)
        console.log(response)
        if(response.status === 200){
            const res = await response.data
            setUsers(res.users)
            setLoading(false)
            // console.log(res.users)
        }
        else{
            const res = await response.json()
            setLoading(false)
            toast.error(res.message)
        }
    }
   
    // const USERS = [
    //     {id:"u1",name:"max millan",image:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",places:5},
    //     {id:"u2",name:"max Indros",image:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",places:1},
    // ];
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