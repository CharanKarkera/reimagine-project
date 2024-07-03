import React from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-[75vh] flex flex-col items-center justify-center ivory">
      <form className="navy-blue hover:bg-[#21214f] rounded-xl p-10 sm:p-14  fontfam text-[ivory] min-h-[40vh] flex flex-col gap-10 shadow-lg shadow-gray-600 w-fit">
        <h1 className="text-4xl text-center">SignUp</h1>
        <article className="flex flex-col gap-5 text-2xl">
          <div className="flex flex-col justify-between gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="rounded-lg hover:ring-1 text-black p-2 text-xl"
            />
          </div>
          <div className="flex flex-col justify-between gap-2">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="rounded-lg hover:ring-1 text-black p-2 text-xl"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <label
                htmlFor="remember"
                className="text-sm hover:text-[orange] transition ease-out"
              >
                Remember Me
              </label>
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="rounded-lg hover:ring-1 text-black p-2 text-xl"
              />
            </div>
            <a
              href="/"
              className="text-sm hover:text-[orange] transition ease-out underline"
            >
              Forgot Password?
            </a>
          </div>
        </article>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
          className="text-2xl p-3 rounded-xl bg-[orange] hover:bg-[#D87A1D] transition ease-out"
        >
          SignUp
        </button>
      </form>
    </section>
  );
};

export default Signup;
