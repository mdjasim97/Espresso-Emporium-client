import { useLoaderData } from "react-router-dom";
import Title from "./Title";
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard"


const Coffee = () => {
    const [coffee, setCoffee] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/coffee")
            .then(res => res.json())
            .then(data => setCoffee(data))
    }, [])

    return (
        <div className="md:w-4/5 mx-auto">
            <Title subTitle="--- Sip & Savor ---" title="Our Popular Products" btn="Add Coffee"/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    coffee.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Coffee;