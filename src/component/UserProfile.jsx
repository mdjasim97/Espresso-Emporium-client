import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';

const UserProfile = () => {
    const getUserData = useLoaderData()
    console.log(getUserData)
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-4xl my-10'>User Profile</h1>
            <div className='bg-base-200 text-center space-y-3 p-4'>
                <h1>User Email: {getUserData.email}</h1>
                {getUserData.createAt && <p>Create Time : {getUserData.createAt}</p> }
            </div>
        </div>
    );
};

export default UserProfile;