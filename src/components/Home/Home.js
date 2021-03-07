import React from 'react';
import { useEffect, useState } from 'react';
import User from '../User/User';
const Home = () => {

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          setUsers(data)
        })
    
      },[])
    return (
        <div>
            <h1>users: {users.length}</h1>
            {
                users.map(user =>  <User user={user}></User>)
            }
        </div>
    );
};

export default Home;