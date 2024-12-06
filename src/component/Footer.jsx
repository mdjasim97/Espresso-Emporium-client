import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-5 mt-10 bg-[url('./images/more/13.jpg')]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-4/5 mx-auto py-10">
        <div className="flex-1 space-y-5 ">
          <img src="./images/more/logo1.png" alt="" className="w-24 h-24" />
          <h3 className="font-rancho text-5xl text-[#331A15] drop-shadow-xl">
            Espresso Emporium
          </h3>
          <p className="font-raleway text-[#1B1A1A] text-xl">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-5">
            <FaFacebook className="text-4xl text-[#331A15] " />
            <FaTwitter className="text-4xl text-[#331A15] " />
            <FaInstagram className="text-4xl text-[#331A15] " />
            <FaLinkedin className="text-4xl text-[#331A15] " />
          </div>

          <p className="font-rancho text-5xl text-[#331A15] drop-shadow-xl ">Get in Touch</p>
          <p className="flex items-center text-[#1B1A1A] gap-2 font-raleway"><FaPhoneAlt /> : +88 01784 293 797</p>
          <p className="flex items-center text-[#1B1A1A] gap-2 font-raleway"><MdEmail /> : mjunachole97@gmail.com</p>
          <p className="flex items-center text-[#1B1A1A] gap-2 font-raleway"><FaLocationDot /> : Dhaka, Bangladesh</p>
        </div>
        <div className="flex-1 flex-col space-y-5 ">
            <h3 className="font-rancho text-5xl text-[#331A15] drop-shadow-xl ">Connect with Us</h3>
            <input type="text" placeholder="Name" className="input focus:outline-none focus:border-none w-full" />
            <input type="email" placeholder="Email" className="input focus:outline-none focus:border-none w-full" />
            <textarea type="text" placeholder="Message" className="input resize-none h-40 focus:outline-none focus:border-none w-full" />
            <button className="btn rounded-full px-10 text-xl bg-transparent border-2 border-[#331A15] hover:text-white hover:bg-[#E3B577] md:text-2xl font-rancho">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
