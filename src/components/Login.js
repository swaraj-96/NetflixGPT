import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-black/[.54]">
        <img
          className="mix-blend-multiply"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f09…ignuptwoweeks-perspective_alpha_website_large.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        />
      </div>

      <form className="absolute bg-black w-4/12 p-12 mt-32 mx-auto right-0 left-0 bg-opacity-60 text-white">
        <h1 className="font-bold text-3xl my-4 ml-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full my-2 p-4 rounded-md border border-slate-600 bg-black"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-full my-2 p-4 rounded-md border border-slate-600 bg-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full my-2 p-4 rounded-md border border-slate-600 bg-black"
        />
        <button className="w-full bg-red-600 p-2 my-6 font-semi-bold rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="m-2 cursor-pointer text-white hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix ? Sign Up Now."
            : "Already have an account ? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
