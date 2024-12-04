import React, { useState } from 'react';
import Header from '../component/Header';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const getUser = useLoaderData()
    console.log(getUser)

    const [users, setUsers] = useState(getUser)


    const handledeleteUser = (id) => {
        console.log("Delete Use id ", id)

        fetch(`http://localhost:4000/users/${id}`, {
            method: "delete"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount>0){
                    const remainingUsers = users.filter(user=> user._id !== id)
                    setUsers(remainingUsers)
                }
            })

    }


    return (
        <div>

            <Header></Header>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Create Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user._id}</td>
                                <td>{user.email}</td>
                                <td>{user.createAt}</td>
                                <td>
                                    <div>
                                        <Link to={`/users/${user._id}`} className='btn mr-2'>View</Link>
                                        <Link to={`/update/${user._id}`} className='btn mr-2'>Edit</Link>
                                        <button onClick={() => handledeleteUser(user._id)} className='btn'>X</button>
                                    </div>
                                </td>
                            </tr>)
                        }




                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Users;