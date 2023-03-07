import React, { useEffect, useState, useContext } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { FriendsContext } from "../Contexts/UserContext";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function FriendsList() {
  const { friends, setFriends } = useContext(FriendsContext);
  const history = useHistory();
  useEffect(() => {
    // localStorage.getItem("token")
    axiosWithAuth()
      .get("http://localhost:9000/api/friends")
      .then((res) => {
        setFriends(res.data);
        console.log(friends);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex mt-16 p-6 flex-col items-center">
      <div className="font-black flex flex-col text-left text-[24px]">
        <h1 className="font-black text-center text-[70px]">FRIENDS LIST</h1>
        {friends.map((item) => (
          <div key={item.id} className="flex justify-between mt-2">
            <ul className=" ml-12  text-left ">
              -{item.name.toUpperCase()} - {item.email.toUpperCase()}
            </ul>
            <NavLink
              to={`/friends/detail/${item.id}`}
              className="bg-black ml-4 rounded-[6px] text-center w-[80px] text-white"
            >
              Detail
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
