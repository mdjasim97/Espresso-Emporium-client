import React from 'react';
import Swal from 'sweetalert2'
import Header from './Header';

const CoffeAdd = () => {

    const handleAddCoffe = (e) => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value;
        const quantity = form.quantity.value
        const suplyer = form.suplyer.value
        const catagory = form.catagory.value;
        const price = form.price.value
        const photo = form.photo.value;

        const coffe = { name, quantity, suplyer, catagory, price, photo }
        console.log(coffe)
        // https://y-two-puce.vercel.app/
        fetch("https://y-two-puce.vercel.app/addcoffe", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(coffe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
                    Swal.fire({
                        title: "Successful!",
                        text: "New Coffee Added!",
                        icon: "success",
                        confirmButtonText: "OK"
                    });
                }
            })
    }

    return (
        <div>
            <Header></Header>
            <div className='bg-base-200 lg:min-h-screen lg:flex lg:flex-col lg:justify-center items-center font-["rancho"]'>

                <div className='lg:w-1/2 lg:h-1/2 bg-white p-2 lg:p-10 border-2 rounded-2xl'>
                    <h1 className='text-4xl text-center font-bold my-2'>Add New Coffe</h1>
                    <p className='my-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudiandae voluptas magni, atque dignissimos repellendus perferendis aut optio, porro quibusdam</p>
                    <form onSubmit={handleAddCoffe} className='text-base'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <label>
                                Coffe Name : <input type="text" name='name' className='border-2 rounded-lg my-2 p-2 w-full' placeholder='Enter Coffe name' />
                            </label>

                            <label>
                                Avilable Quantity : <input type="text" name='quantity' className='border-2 rounded-lg my-2 p-2 w-full' placeholder='Enter avilable Quantity' />
                            </label>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <label>
                                Supplyer : <input type="text" name='suplyer' className='border-2 rounded-lg my-2 p-2 w-full' placeholder='Enter Suplyer Name' />
                            </label>

                            <label>
                                Catagory : <input type="text" name='catagory' className='border-2 rounded-lg my-2 p-2 w-full' placeholder='Enter Coffe catagory' />
                            </label>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <label>
                                Coffe Price : <input type="text" name='price' className='border-2 rounded-lg my-2 p-2 w-full' placeholder='Enter Coffe Price' />
                            </label>
                            <label>
                                Coffe Picture : <input type="text" name='photo' className='border-2 rounded-lg my-2 p-2 w-full' placeholder='Enter Coffe picture link' />
                            </label>
                        </div>

                        <button className='btn w-full bg-[#23BE0A] text-white'>Add New Coffe</button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default CoffeAdd;