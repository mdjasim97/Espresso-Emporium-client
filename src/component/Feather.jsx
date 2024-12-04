

const Feather = () => {
  return (
    <div className="bg-[#ECEAE3] grid grid-cols-1 md:grid-cols-4 py-8 px-4 md:px-72 border-2 border-red-700 gap-10">
      <div className="items-center space-y-3 ">
        <img src="images/icons/1.png" alt="" />
        <h3 className="font-rancho text-4xl">Awesome Aroma</h3>
        <p className="text-base font-raleway">You will definitely be a fan of the design & aroma of your coffee</p>
      </div>

      <div className="items-center space-y-3 ">
        <img src="images/icons/2.png" alt="" />
        <h3 className="font-rancho text-4xl">High Quality</h3>
        <p className="text-base font-raleway">We served the coffee to you maintaining the best quality</p>
      </div>

      <div className="items-center space-y-3 ">
        <img src="images/icons/3.png" alt="" />
        <h3 className="font-rancho text-4xl">Pure Grades</h3>
        <p className="text-base font-raleway">The coffee is made of the green coffee beans which you will love</p>
      </div>

      <div className="items-center space-y-3 ">
        <img src="images/icons/4.png" alt="" />
        <h3 className="font-rancho text-4xl">Proper Roasting</h3>
        <p className="text-base font-raleway">Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
    </div>
  );
};

export default Feather;
