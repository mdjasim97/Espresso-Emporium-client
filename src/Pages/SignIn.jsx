import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { userSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };
    console.log(user);
    userSignIn(email, password)
      .then((result) => {
        console.log(result);
        if (result?.user) {
          Swal.fire({
            title: "Success!",
            text: "User login Successful.",
            icon: "success",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center bg-[url('../../images/more/11.png')] bg-no-repeat my-24">
      <div className="lg:w-1/2 lg:h-1/2 bg-[#F4F3F0] p-2 lg:p-10 border-2 rounded-2xl">
        <h1 className="text-5xl text-center font-bold my-2 font-rancho">
          Sign In
        </h1>
        <p className="my-3 w-3/4 mx-auto text-center font-raleway">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem repudiandae voluptas magni, atque dignissimos
          repellendus perferendis aut optio, porro quibusdam
        </p>
        <form onSubmit={handleSignIn}>
          <label className="text-xl">
            Email :{" "}
            <input
              type="email"
              name="email"
              className="border-2 rounded-lg my-2 p-2 w-full"
              placeholder="Enter Your email"
            />
          </label>

          <label className="text-xl">
            Password :{" "}
            <input
              type="password"
              name="password"
              className="border-2 rounded-lg my-2 p-2 w-full"
              placeholder="Enter password!"
            />
          </label>

          <button className="btn w-full bg-[#E3B577] text-white text-xl font-rancho ">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
