import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { companyLogin } from "../redux/actions";
import Loader from "react-loader-spinner";
import { Redirect } from "react-router";

const CompanyPortal = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const makingApiRequest = useSelector((state) => state.makingApiRequest);
  const company_id = useSelector((state) => state.company_id);

  const [input_company_id, set_company_id] = useState("");
  const [input_company_pin, set_company_pin] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const authData = {
      id: input_company_id,
      company_pin: input_company_pin,
    };
    dispatch(companyLogin(authData));
    if (isAuthenticated === false) {
      setInvalidPassword(true);
    } else {
      props.history.push("/company/user_portal");
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem("auth");
    if (authToken) {
      console.log(isAuthenticated, "s");
    }
  });

  return isAuthenticated ? (
    <Redirect to="/company/user_portal" />
  ) : (
    <div className="flex text-white">
      <section className="bg-gray-300 w-1/2 h-screen flex flex-col">
        <h2 className="text-5xl text-left mx-8 my-2">Company Portal</h2>
        <div className="flex flex-col justify-center items-center w-1/2 m-auto">
          <div className="w-full text-left">
            <h3 className="text-4xl font-bold">Log in.</h3>
            <p className="text-xl mb-12">
              Please log in with your company ID and PIN.
            </p>
          </div>
          {makingApiRequest ? (
            <div className="h-64">
              <Loader type="Rings" color="#B794F4" height={150} width={150} />
            </div>
          ) : (
            <form className="display flex flex-col text-left w-full">
              <label className="font-bold" for="company_id">
                Company ID
              </label>
              <input
                className="w-full mb-8 rounded p-2 mt-2 shadow apprearance-none text-gray-400"
                name="company_id"
                value={input_company_id}
                placeholder="ex: 51255125"
                onChange={(e) => set_company_id(e.target.value)}
              />
              <label className="font-bold" for="company_pin">
                PIN
              </label>
              {invalidPassword ? (
                <span className="text-red-500 text-xs">
                  Incorrect Company ID or PIN please try again.
                </span>
              ) : null}
              <input
                className="w-full mb-8 rounded p-2 mt-2 shadow apprearance-none text-gray-400"
                name="company_pin"
                type="password"
                value={input_company_pin}
                placeholder="Enter your company PIN"
                onChange={(e) => set_company_pin(e.target.value)}
              />
              <button
                className="bg-blue-400 w-full rounded py-4 text-white shadow"
                onClick={handleSubmit}
              >
                Log in
              </button>
              <div className="text-center">
                <p className="py-2 text-left">
                  Don't have an account?
                  <span className="cursor-pointer text-purple-500 font-bold ml-2">
                    Register now
                  </span>
                </p>
                <span className="text-center py-2 cursor-pointer text-purple-500 font-bold">
                  Forgot PIN
                </span>
              </div>
            </form>
          )}
        </div>
      </section>
      <section className="bg-purple-400 w-1/2 h-screen"></section>
    </div>
  );
};

export default CompanyPortal;
