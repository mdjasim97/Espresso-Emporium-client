
import Header from '../component/Header';
import { useLoaderData } from 'react-router-dom';

const UserUpdate = () => {

    const getUpdateUser = useLoaderData()
    console.log(getUpdateUser)



    const handleUserUpdate = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        
        const userEmail = {email}
        console.log(userEmail)

        


        fetch(`https://y-two-puce.vercel.app/users/${getUpdateUser._id}`,{
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(userEmail)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
    }

    return (

        <div>
            <Header></Header>

            <div className='flex justify-center items-center min-h-screen bg-base-200'>

                <div className='lg:w-1/2 lg:h-1/2 bg-white p-2 lg:p-10 border-2 rounded-2xl'>
                    <h1 className='text-4xl text-center font-bold my-2'>User Update Form</h1>
                    <p className='text-center bg-base-200 p-2'>Update user : {getUpdateUser.email}</p>
                    <p className='my-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae voluptas magni, atque dignissimos repellendus perferendis aut optio, porro quibusdam</p>
                    <form onSubmit={handleUserUpdate}>

                        <label className='text-xl'>
                            Email : <input type="email" name='email' defaultValue={getUpdateUser.email} className='border-2 rounded-lg my-2 p-2 w-full' placeholder='Enter Your email' />
                        </label>


                        <button className='btn w-full bg-[#23BE0A] text-white'>Save Change</button>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default UserUpdate;