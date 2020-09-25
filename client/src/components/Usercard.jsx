import React from "react";
import { useSelector } from "react-redux";
import profileImg from "../assets/profile-placeholder.png";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Usercard = ({ user }) => {
  //   const users = useSelector((state) => state.users);
  return (
    <div className="relative display flex flex-col items-center rounded-lg shadow-lg h-56 w-48 bg-white text-gray-500 pt-4 my-2">
      <img
        className="rounded-lg border shadow h-auto w-2/5 my-2"
        src={profileImg}
      />
      <div className="">
        <p className="font-bold">
          {user.first_name} {user.last_name}
        </p>
        <p className="text-xs">{user.email}</p>
      </div>
      <div className="flex">
        {user.twitter !== "" ? (
          <a href={`https://twitter.com/${user.twitter}`} target="_blank">
            <FaTwitter
              className="mt-2 mr-1 cursor-pointer"
              color="#0077B5"
              size="20px"
            />
          </a>
        ) : null}
        {user.github !== "" ? (
          <a href={`https://github.com/${user.github}`} target="_blank">
            <FaGithub
              className="mt-2 mr-1 cursor-pointer"
              color="#000"
              size="20px"
            />
          </a>
        ) : null}
        {user.linkedin !== "" ? (
          <a href={`${user.linkedin}`} target="_blank">
            <FaLinkedin
              className="mt-2 mr-1 cursor-pointer"
              color="#1DA1F2"
              size="20px"
            />
          </a>
        ) : null}
      </div>
      <div className="absolute rounded-b-lg bottom-0 text-xs text-gray-500 bg-gray-200 w-full py-2 text-center shadow-inner">
        {user.title}
      </div>
    </div>
  );
};

export default Usercard;
