import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { companyLogin } from "../redux/actions";

const CompanyPortal = (props) => {
  const [input_company_id, set_company_id] = useState("");
  const [input_company_pin, set_company_pin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const authData = {
      id: input_company_id,
      company_pin: input_company_pin,
    };
    props.companyLogin(authData);
  };
  useEffect(() => {
    console.log(props);
    console.log(props.company_id);
  });

  return (
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
            <input
              className="w-full mb-8 rounded p-2 mt-2 shadow apprearance-none text-gray-400"
              name="company_pin"
              type="password"
              value={input_company_pin}
              placeholder="Enter your company PIN"
              onChange={(e) => set_company_pin(e.target.value)}
            />
            {props.makingApiRequest ? (
              <button className="bg-blue-400 w-full rounded py-4 text-white shadow">
                LOADING...
              </button>
            ) : (
              <button
                className="bg-blue-400 w-full rounded py-4 text-white shadow"
                onClick={handleSubmit}
              >
                Log in
              </button>
            )}
          </form>
          <div>
            <p className="py-2">
              Don't have an account?
              <span className="cursor-pointer text-purple-500 font-bold">
                Register now
              </span>
            </p>
            <span className="text-center py-2 cursor-pointer text-purple-500 font-bold">
              Forgot PIN
            </span>
          </div>
        </div>
      </section>
      <section className="bg-purple-400 w-1/2 h-screen"></section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    company_id: state.company_id,
    makingApiRequest: state.makingApiRequest,
  };
};

export default connect(mapStateToProps, { companyLogin })(CompanyPortal);
