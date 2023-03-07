import React from "react";
import { FriendsContext } from "../Contexts/UserContext";
import { useContext } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

function AddFriend() {
  const { newFriends, setNewFriends } = useContext(FriendsContext);
  const changeHandle = (e) => {
    setNewFriends({ ...newFriends, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post("http://localhost:9000/api/friends", newFriends)
      .then((res) => {
        console.log(res);
        setNewFriends({ name: "", email: "" });

        console.log(res.data.token);
      })
      .catch((error) => console.log(error));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" items-center flex flex-col mt-16 p-6 font-black"
    >
      <h1 className="text-[70px]">ADD FRIEND</h1>
      <div className=" w-2/5 flex text-[20px] flex-col ">
        <label className="flex  flex-col">
          <p className="flex items-start"> FRIEND NAME</p>
          <input
            onChange={changeHandle}
            name={"name"}
            type="text"
            className=" px-2 h-16 text-white bg-black"
          />
        </label>
        <label className="flex item flex-col">
          <p className=" flex items-start  mt-3">FRIEND EMAIL</p>
          <input
            onChange={changeHandle}
            name={"email"}
            type="email"
            className="px-2 h-16 text-white bg-black"
          />
        </label>
        <label className="flex  flex-col">
          <button
            type="submit"
            className="text-white text-[20px] mt-4 h-16 bg-black"
          >
            {" "}
            SUMBIT
          </button>
        </label>
      </div>
    </form>
  );
}

export default AddFriend;
