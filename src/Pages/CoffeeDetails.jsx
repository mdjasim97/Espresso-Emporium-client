import { HiArrowLongLeft } from "react-icons/hi2";
import { useLoaderData, useNavigate } from "react-router-dom";

const CoffeeDetails = () => {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  const {coffee, photo, chef, supplier, taste, category, details} = coffeeData;
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };
  return (
    <div className=" w-4/5 mx-auto bg-[url('../../images/more/11.png')] bg-no-repeat p-24">
      <button onClick={gotoHome} className="flex text-3xl font-rancho items-center gap-2 hover:text-[#E3B577] p-2">
        {" "}
        <HiArrowLongLeft size={24} /> Back to home
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F4F3F0] gap-10 my-5 p-20">
        <div className="flex justify-center items-center">
          <img draggable="" src={photo} alt="" className="h-full" />
        </div>
        <div>
          <h3 className="font-rancho text-5xl drop-shadow-md">Niceties</h3>
          <div className="font-raleway text-xl space-y-2 mt-10">
            <p className="text-xl"><span className="font-bold">Name :</span> {coffee}</p>
            <p className="text-xl"><span className="font-bold">Chef :</span> {chef}</p>
            <p className="text-xl"><span className="font-bold">supplier :</span> {supplier}</p>
            <p className="text-xl"><span className="font-bold">Taste :</span> {taste}</p>
            <p className="text-xl"><span className="font-bold">Category :</span> {category}</p>
            <p className="text-xl"><span className="font-bold">Details :</span> {details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
