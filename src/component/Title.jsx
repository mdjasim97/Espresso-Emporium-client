const Title = ({ subTitle, title, btn }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10 space-y-3">
      <p className="text-xl font-raleway">{subTitle}</p>
      <h2 className="font-rancho text-4xl md:text-6xl text-[#331A15] drop-shadow-md">{title}</h2>
      {
      btn && 
        <button className="btn rounded-none bg-[#E3B577] text-white drop-shadow-md hover:bg-transparent md:text-2xl font-rancho">{btn}</button>
      }
      
    </div>
  );
};

export default Title;
