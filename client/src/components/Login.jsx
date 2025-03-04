import React from "react";
import LoginBg from "../assets/img/banner2.jpg"; // Default import
import Logo from "../assets/img/logo.png";

const Login = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      {/* background image */}
      <img
        src={LoginBg} // Use the imported image directly
        alt="Login Background"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* <div
        className="flex flex-col items-center w-[80%] md:w-[408px] h-full z-10 backdrop-blur-md p-4 px-4 py-12"
        style={{ backgroundColor: "var(--light-overlay)" }}
      >
        <div className="flex items-center justify-start gap-4 w-full">
          <img src={Logo} className="w-8" alt="" />
          <p
            className="font-semibold text-3xl"
            style={{ color: "var(--text-color)" }}
          >
            KBC
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
