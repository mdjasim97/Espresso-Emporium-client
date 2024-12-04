import React, { useContext } from 'react';
import { AuthContext } from '../ProviderContext';
import Header from '../component/Header';

const SignUp = () => {

    const { handleCreateUser } = useContext(AuthContext)


    const handleSignUp = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)


        handleCreateUser(email, password)
            .then(result => {
                console.log(result)

                // User Create
                const createAt = result.user?.metadata?.creationTime
                const user = { email, createAt }
                fetch("http://localhost:4000/users", {
                    method: "post",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    return (

        <div>
            <Header></Header>

            <div className='flex justify-center items-center min-h-screen bg-base-200'>

                <div className='lg:w-1/2 lg:h-1/2 bg-white p-2 lg:p-10 border-2 rounded-2xl'>
                    <h1 className='text-4xl text-center font-bold my-2'>User Register Form</h1>
                    <p className='my-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae voluptas magni, atque dignissimos repellendus perferendis aut optio, porro quibusdam</p>
                    <form onSubmit={handleSignUp}>

                        <label className='text-xl'>
                            Email : <input type="email" name='email' className='border-2 rounded-lg my-2 p-2 w-full' placeholder='Enter Your email' />
                        </label>

                        <label className='text-xl'>
                            Password : <input type="password" name='password' className='border-2 rounded-lg my-2 p-2 w-full' placeholder='Enter avilable Quantity' />
                        </label>

                        <button className='btn w-full bg-[#23BE0A] text-white'>SignUp</button>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default SignUp;