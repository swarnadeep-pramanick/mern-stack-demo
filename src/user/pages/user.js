import React from "react";

import UserList from "../components/usersList";

const Users = () => {
    const USERS = [
        {id:1,name:"max millan",image:"https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",places:5},
        {id:1,name:"max Indros",image:"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",places:1},
    ];
    return <UserList items={USERS} />
} 

export default Users