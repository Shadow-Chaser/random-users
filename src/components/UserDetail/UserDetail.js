import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const UserDetail = () => {
    const {userId} = useParams()
    const [userDetail, setUserDetail] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res=>res.json())
        .then(data=>setUserDetail(data))
    },[])

    const {name, email, phone, website} = userDetail;
    return (
        <div>
            <h1>User Details </h1>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>

        </div>
    );
};

export default UserDetail;