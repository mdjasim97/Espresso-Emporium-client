import React, { useEffect, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    // console.log(coffee)

    const { _id, name, quantity, supplier, taste, photo } = coffee;



    const handleDelete = (id) => {
        console.log("Delete Data", id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/delete/${_id}`, {
                    method: `delete`,
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Coffee has been deleted.",
                                "success"
                            )

                            const remaining = coffees.filter(cof => cof._id!==_id);
                            setCoffees(remaining);
                        }
                    })


            }
        });
    }



    return (
        <div className='m-2'>

            <div className="card card-side bg-[#F5F4F1] shadow-xl lg:p-5">
                <figure>
                    <img src={coffee.photo} alt="coffe-bottle" />
                </figure>

                <div className="flex items-center justify-between w-full">
                    <div>
                        <h2 className="card-title lg:text-3xl font-bold">Name : {coffee.name}</h2>
                        <p className='lg:text-2xl font-semibold'>Chef : {coffee.suplyer}</p>
                        <p className='lg:text-2xl font-semibold'>Price : {coffee.price} Tk</p>
                    </div>

                    <div className="join join-vertical">
                        <button className='btn border-0 bg-[#F5F4F1] join-item'><FaEye className='text-2xl' /> </button>
                        <Link to={`updateCoffee/${coffee._id}`} className='btn border-0 bg-[#F5F4F1] join-item'><MdEdit className='text-2xl' /></Link>
                        <button onClick={() => handleDelete(coffee._id)} className='btn border-0 bg-[#F5F4F1] join-item'><MdDelete className='text-2xl' /></button>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default CoffeeCard;