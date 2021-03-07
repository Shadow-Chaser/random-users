import React from 'react';
import './User.css'
import {Link} from 'react-router-dom'

const User = (props) => {
    const{name, id} = props.user;
    return (
        <div className='user'>
            <h1>{name}</h1>
            <p>
            <Link to={`/user/${id}`}>
                <button>Show Detail</button>
            </Link>
            </p>



           
        </div>
    );
};

export default User;