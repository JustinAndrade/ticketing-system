import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, getUsers } from "../redux/actions";
import Loader from "react-loader-spinner";
import profileImg from "../assets/profile-placeholder.png";

const UserPortal = (props) => {
  const dispatch = useDispatch();
  // const company_id = useSelector((state) => state.company_id);
  const users = useSelector((state) => state.users);
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
    console.log(user);
    const authData = {
      username: input_username,
      password: input_user_password,
    };
    dispatch(userLogin(authData));
    if (!localStorage.getItem("userAuth")) {
      setInvalidPassword(false);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("auth");
    const userToken = localStorage.getItem("userAuth");
    const parsedToken = JSON.parse(token);
    const parsedUserToken = JSON.parse(userToken);
    console.log(user);
    // console.log(users);
    dispatch(getUsers());
    if (parsedToken) {
      setCompanyId(parsedToken.company_id);
    }
  }, []);

  return (
    <div className="flex text-white">
      <section className="bg-gray-300 w-1/4 h-screen flex flex-col">
        <h2 className="text-3xl text-left mx-8 my-2 text-purple-400 font-bold text-center">
          {users.companies
            ? users.companies.map((company) => {
                if (company.id == company_id) return company.company_name;
              })
            : "Company Homepage"}
        </h2>
        {isUserAuthenticated ? (
          <h3>Welcome, {user.first_name}</h3>
        ) : (
          <div className="flex flex-col justify-center items-center w-1/2 m-auto">
            <div className="w-full text-left">
              <h3 className="text-2xl font-bold">Log in.</h3>
              <p className="text-sm mb-12">
                Please log in with your username and password.
              </p>
            </div>
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
                PIN
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
              {makingApiRequest ? (
                <button className="bg-blue-400 w-full rounded py-4 text-white shadow text-center display flex justify-center">
                  <Loader
                    type="Rings"
                    color="#FFF"
                    height={75}
                    width={75}
                    timeout={3000}
                  />
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
              <p className="cursor-pointer text-purple-500 font-bold py-2 text-xs">
                Register new user
              </p>
              <span className="text-center py-2 cursor-pointer text-purple-500 text-xs font-bold">
                Forgot Password
              </span>
            </div>
          </div>
        )}
      </section>
      <section className="bg-purple-400 w-3/4 h-screen">
        <h2 className="text-3xl text-left mt-4 ml-6 font-bold">People</h2>
        <div className="display flex justify-around mt-12">
          {users.companies
            ? users.companies.map((company) => {
                const token = JSON.parse(localStorage.getItem("auth"));
                if (Number(company.id) == token.company_id) {
                  return company.users.map((user) => {
                    return (
                      <div className="relative display flex flex-col items-center rounded-lg shadow-lg h-64 w-48 bg-white text-gray-500 pt-4">
                        <img
                          className="rounded-lg border shadow h-auto w-2/4 my-2"
                          src={profileImg}
                        />
                        <div className="">
                          <p className="text-sm font-bold">
                            {user.first_name} {user.last_name}
                          </p>
                          <p className="text-xs">{user.email}</p>
                        </div>
                        <div className="absolute rounded-b-lg bottom-0 text-xs text-gray-500 bg-gray-200 w-full py-2 text-center shadow-inner">
                          Software Engineer
                        </div>
                      </div>
                    );
                  });
                }
              })
            : null}
        </div>
      </section>
    </div>
  );
};

export default UserPortal;
