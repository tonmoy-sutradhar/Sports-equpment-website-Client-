import { useContext, useState } from "react";
import { AuthContext } from "./../Provider/AuthProvider";
import google from "../assets/google.png";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, GoogleLogin } =
    useContext(AuthContext);

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    const terms = form.get("terms");

    setErr("");
    setSuccess(false);

    if (password.length <= 6) {
      setErr("Password must be more than 6 characters.");
      toast.warning("Password must be more than 6 characters.");
      return;
    }

    if (!terms) {
      setErr("Please Accept Terms & Condition");
      toast.warning("Please Accept Terms & Condition");
      return;
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!regex.test(password)) {
      setErr(
        "Password must contain more than six characters, one number, one uppercase letter, and one special character."
      );
      toast.warning(
        "Password must contain more than six characters, one number, one uppercase letter, and one special character."
      );
      return;
    }

    // Create new user
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setSuccess(true);
        toast.success("Sign up successfully.");

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
            console.log("Profile Update.");
          })
          .catch((error) => {
            console.log("ERROR IN PROFILE --", error);
          });
      })
      .catch((error) => {
        // console.log("ERROR IN REGISTER --", error.message);
        toast.warning(`Error: ${error.message}`);
        setSuccess(false);
      });
  };

  return (
    <div className="flex justify-center items-center">
      {/* Left Side: Image/Welcome Section */}

      <div className="hidden md:flex w-full md:w-1/2 hero relative bg-[url('https://media.licdn.com/dms/image/v2/D5612AQHwiDS5WkydGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682490558908?e=2147483647&v=beta&t=2vB1mER2TmX5zWcFvytabIi4jK1nroqFlDFS_6HJreE')] bg-cover bg-center h-[500px]  items-center justify-center md:h-[690px] mr-7 text-white p-6 ">
        <div className="text-center text-purple-600">
          <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
          <p className="text-lg">
            Join us today and explore the endless possibilities.
            <br />
            Create your account now!
          </p>
        </div>
      </div>

      <div className="card bg-gradient-to-r from-blue-500 to-purple-600 w-full max-w-sm shrink-0 shadow-2xl rounded-none p-3">
        <form onSubmit={handleSubmit} className="card-body ">
          <h1 className="text-xl font-semibold text-center">
            Register your account
          </h1>
          <hr />
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input rounded-none bg-[white]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input rounded-none bg-[white]"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="input rounded-none bg-[white]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-2xl absolute right-4 top-12"
            >
              {showPassword ? <IoMdEyeOff /> : <IoEyeSharp />}
            </button>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label justify-start">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-success"
              />
              <span className="label-text ml-2 text-gray-400">
                Accept Terms & Conditions
              </span>
            </label>
          </div>

          <div className="flex justify-center gap-1 mt-3 items-center w-[60%] border-2 border-blue-500 rounded-full px-1">
            <img className="w-5 h-5 rounded-full" src={google} alt="img" />
            <button
              type="button"
              onClick={() => {
                GoogleLogin()
                  .then(() => {
                    toast.success("Google login successful");
                    navigate("/");
                  })
                  .catch((error) => {
                    toast.warning("Google login unsuccessful");
                  });
              }}
              className="text-sm py-1"
            >
              Login with Google
            </button>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-active bg-lime-400 text-black font-bold rounded-none"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-black font-thin text-center">
          Already have an Account?{" "}
          <Link
            className="text-blue-700 text-sm font-bold border-b-2 border-blue-700"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>

    // <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-purple-600 to-blue-500">
    //   {/* Left Side: Image/Welcome Section */}
    //   <div className="hidden md:flex w-full md:w-1/2 items-center justify-center text-white p-6">
    //     <div className="text-center">
    //       <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
    //       <p className="text-lg">
    //         Join us today and explore the endless possibilities.
    //         <br />
    //         Create your account now!
    //       </p>
    //     </div>
    //   </div>

    //   {/* Right Side: Form Section */}
    //   <div className="flex w-full md:w-1/2 justify-center items-center bg-white">
    //     <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
    //       <form onSubmit={handleSubmit}>
    //         <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
    //         <div className="form-control mb-4">
    //           <label className="label">
    //             <span className="label-text font-semibold">Your Name</span>
    //           </label>
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="Enter your name"
    //             className="input input-bordered w-full rounded-md"
    //             required
    //           />
    //         </div>
    //         <div className="form-control mb-4">
    //           <label className="label">
    //             <span className="label-text font-semibold">Photo URL</span>
    //           </label>
    //           <input
    //             type="text"
    //             name="photo"
    //             placeholder="Enter your photo URL"
    //             className="input input-bordered w-full rounded-md"
    //             required
    //           />
    //         </div>
    //         <div className="form-control mb-4">
    //           <label className="label">
    //             <span className="label-text font-semibold">Email address</span>
    //           </label>
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="Enter your email address"
    //             className="input input-bordered w-full rounded-md"
    //             required
    //           />
    //         </div>
    //         <div className="form-control mb-4">
    //           <label className="label">
    //             <span className="label-text font-semibold">Password</span>
    //           </label>
    //           <div className="relative">
    //             <input
    //               type={showPassword ? "text" : "password"}
    //               name="password"
    //               placeholder="Enter your password"
    //               className="input input-bordered w-full rounded-md"
    //               required
    //             />
    //             <button
    //               type="button"
    //               onClick={() => setShowPassword(!showPassword)}
    //               className="absolute right-4 top-2 text-xl"
    //             >
    //               {showPassword ? <IoMdEyeOff /> : <IoEyeSharp />}
    //             </button>
    //           </div>
    //         </div>
    //         <div className="form-control mb-4">
    //           <label className="label cursor-pointer">
    //             <input type="checkbox" name="terms" className="checkbox" />
    //             <span className="label-text ml-2">
    //               Accept Terms & Conditions
    //             </span>
    //           </label>
    //         </div>
    //         <div className="form-control mb-4">
    //           <button
    //             type="submit"
    //             className="btn btn-primary w-full rounded-md"
    //           >
    //             Register
    //           </button>
    //         </div>
    //       </form>
    //       <div className="text-center">
    //         <p className="text-sm">
    //           Already have an account?{" "}
    //           <Link to="/login" className="text-blue-600">
    //             Login here
    //           </Link>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Register;
