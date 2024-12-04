const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/fdr1KYw/3.png')] w-full h-72 md:h-[800px]">
      <div className="md:w-1/2 p-4 md:p-10 absolute right-0 md:top-1/2 md:transform md:-translate-y-1/2  space-y-4">
        <h1 className="font-['rancho'] text-2xl md:text-5xl text-white">Would you like a Cup of Delicious Coffee?</h1>
        <p className="font-raleway text-base text-white">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
        <button className="btn rounded-none bg-[#E3B577] hover:text-white hover:bg-transparent md:text-2xl font-rancho">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
