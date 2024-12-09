
import Title from "./Title";
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";

const Coffee = () => {
  const [coffeeCard, setCoffeeCard] = useState([]);

  useEffect(() => {
    fetch("https://y-two-puce.vercel.app/coffee")
      .then((res) => res.json())
      .then((data) => setCoffeeCard(data));
  }, []);

  const onDeleteCoffee = (id) => {
    setCoffeeCard(coffeeCard.filter((coffee) => coffee._id !== id));
  };

  return (
    <div className="bg-[url('../../images/more/1.png')] my-20">
      <div className="md:w-4/5 mx-auto">
        <Title
          subTitle="--- Sip & Savor ---"
          title="Our Popular Products"
          btn="Add Coffee"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          {coffeeCard.map((coffee) => (
            <CoffeeCard key={coffee._id} coffeeItem={coffee} onDeleteCoffee={onDeleteCoffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coffee;
