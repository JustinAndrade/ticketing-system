import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, getUsers } from "../redux/actions";
import profileImg from "../assets/profile-placeholder.png";
import Usercard from "../components/Usercard";

// JSON Objects
import users from "../JSON/users.json";
import tickets from "../JSON/tickets.json";

import Loader from "react-loader-spinner";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import TicketPreviewContainer from "../components/TicketPreviewContainer";

const UserPortal = () => {
  const dispatch = useDispatch();
  // const company_id = useSelector((state) => state.company_id);
  // const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.user_data);
  const makingApiRequest = useSelector((state) => state.makingApiRequest);
  const isUserAuthenticated = useSelector((state) => state.isUserAuthenticated);

  const [company_id, setCompanyId] = useState(null);
  const [user_id, setUserId] = useState(null);

  // input state management
  const [input_username, set_username] = useState("");
  const [input_user_password, set_password] = useState("");
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const authData = {
      username: input_username,
      password: input_user_password,
    };
    dispatch(userLogin(authData));
    if (!isUserAuthenticated) {
      setInvalidPassword(true);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("auth");
    const userToken = localStorage.getItem("userAuth");
    const parsedToken = JSON.parse(token);
    const parsedUserToken = JSON.parse(userToken);
    dispatch(getUsers());
    if (parsedToken) {
      setCompanyId(parsedToken.company_id);
    }
  }, []);

  return (
    <div className="flex text-white h-full">
      <section className="bg-gray-300 w-1/4 h-100">
        <h2 className="text-2xl font-bold text-left m-4">Welcome User,</h2>
        <div className="mx-4">
          <div className="text-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl text-left m-4 font-bold">Open Tickets</h3>
              <span className="cursor-pointer text-purple-600 font-bold">
                view all
              </span>
            </div>
            <div className="">
              {tickets.map((ticket) => {
                let date = Date(ticket.age);
                date = date.split("00");
                return (
                  <TicketPreviewContainer ticket={ticket} date={date[0]} />
                );
              })}
            </div>
          </div>
          <div className="text-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl text-left m-4 font-bold">
                Recent Tickets
              </h3>
              <span className="cursor-pointer text-purple-600 font-bold">
                view all
              </span>
            </div>
            {tickets.map((ticket) => {
              let date = Date(ticket.age);
              date = date.split("00");
              return <TicketPreviewContainer ticket={ticket} date={date[0]} />;
            })}
          </div>
          <div className="text-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl text-left m-4 font-bold">
                High Priority Tickets
              </h3>
              <span className="cursor-pointer text-purple-600 font-bold">
                view all
              </span>
            </div>
            {tickets.map((ticket) => {
              let date = Date(ticket.age);
              date = date.split("00");
              return <TicketPreviewContainer ticket={ticket} date={date[0]} />;
            })}
          </div>
        </div>
        {/* {isUserAuthenticated ? (
          <h3>Welcome, {user.first_name}</h3>
        ) : (
          <div className="flex flex-col items-center w-1/2 mt-48 mx-auto">
            <div className="w-full text-left">
              <h3 className="text-2xl font-bold">Log in.</h3>
              <p className="text-xs md:text-sm mb-12">
                Please log in with your username and password.
              </p>
            </div>
            {makingApiRequest ? (
              <Loader type="Rings" color="#B794F4" height={150} width={150} />
            ) : (
              <form className="display flex flex-col text-left w-full">
                <label className="font-bold" for="username">
                  Username
                </label>
                <input
                  className="w-full mb-8 rounded p-2 mt-2 shadow apprearance-none text-gray-400"
                  name="username"
                  value={input_username}
                  placeholder="ex: JohnDoe123"
                  onChange={(e) => set_username(e.target.value)}
                />
                <label className="font-bold" for="password">
                  Password
                </label>
                {invalidPassword ? (
                  <span className="text-red-500 text-xs">
                    Incorrect Username or Password please try again.
                  </span>
                ) : null}
                <input
                  className="w-full mb-8 rounded p-2 mt-2 shadow apprearance-none text-gray-400"
                  name="password"
                  type="password"
                  value={input_user_password}
                  placeholder="Enter your password"
                  onChange={(e) => set_password(e.target.value)}
                />
                <button
                  className="bg-blue-400 w-full rounded py-4 text-white shadow"
                  onClick={handleSubmit}
                >
                  Log in
                </button>
              </form>
            )}
            <div>
              <p className="cursor-pointer text-purple-500 font-bold py-2 text-xs">
                Register new user
              </p>
              <span className="text-center py-2 cursor-pointer text-purple-500 text-xs font-bold">
                Forgot Password
              </span>
            </div>
          </div>
        )} */}
      </section>
      <section className="bg-purple-400 w-3/4 h-full">
        <h2 className="text-3xl text-left mt-2 ml-6 font-bold">Our Team</h2>
        {/* <div className="display flex flex-wrap justify-around mt-12"> */}
        <div className="grid grid-rows-5 xl:grid-rows-3 grid-flow-col gap-3 p-12">
          {/* {users */}
          {/* // ? users.companies.map((company) => { */}
          {/* // const token = JSON.parse(localStorage.getItem("auth")); */}
          {/* // if (Number(company.id) == token.company_id) { */}
          {/* // return users.map((user) => { */}
          {/* // return ( */}
          {users.map((user) => {
            return <Usercard user={user} />;
          })}
          {/* // ); */}
          {/* // }); */}
          {/* // } */}
          {/* // }) */}
          {/* // : null} */}
        </div>
      </section>
    </div>
  );
};

export default UserPortal;
