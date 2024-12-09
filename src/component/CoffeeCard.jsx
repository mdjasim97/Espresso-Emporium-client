

import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffeeItem, onDeleteCoffee}) => {
    const { _id, coffee, price, chef, photo } = coffeeItem;





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
                fetch(`https://y-two-puce.vercel.app/delete/${_id}`, {
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
                            onDeleteCoffee(_id)
                        }
                    })


            }
        });
    }



    return (
        <div className='m-2 p-2'>
            <div className="card card-side bg-[#F5F4F1] shadow-xl lg:p-5">
                <figure>
                    <img src={photo} alt="coffee-bottle" />
                </figure>

                <div className="flex items-center justify-between w-full">
                    <div>
                        <h2 className="card-title lg:text-3xl font-bold">Name : {coffee}</h2>
                        <p className='lg:text-2xl font-semibold'>Chef : {chef}</p>
                        <p className='lg:text-2xl font-semibold'>Price : {price} Tk</p>
                    </div>

                    <div className="join join-vertical gap-4">
                        <Link to={`/coffeeDetails/${_id}`}  className='btn border-0 bg-[#D2B48C] join-item'><FaEye className='text-white text-2xl' /> </Link>
                        <Link to={`updateCoffee/${_id}`} className='btn border-0 bg-[#3C393B] text-white join-item'><MdEdit className='text-2xl' /></Link>
                        <button onClick={() => handleDelete(_id)} className='btn border-0 bg-[#EA4744] text-white join-item'><MdDelete className='text-2xl' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;