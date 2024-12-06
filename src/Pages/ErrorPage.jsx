import { HiArrowLongLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();

  const gotToHome = () => {
    navigate('/');
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={gotToHome}
          className="flex text-3xl font-rancho items-center gap-2 hover:text-[#E3B577] p-10"
        >
          {" "}
          <HiArrowLongLeft size={24} /> Back to home
        </button>
        <img
          src="https://i.postimg.cc/7Z4Lm5Pz/404.gif"
          alt="Not found gif"
          className=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
