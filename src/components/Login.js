import React, { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { axiosWithAuth } from "./axiosWithAuth";
import { useHistory } from "react-router-dom";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const changeHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post("http://localhost:9000/api/login", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/friends");
        console.log(res.data.token);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex mt-16 flex-col ">
      <form
        onSubmit={handleSubmit}
        className=" items-center flex flex-col p-6 font-black"
      >
        <h1 className="text-[70px]">LOGIN</h1>
        <div className=" w-2/5 flex text-[20px] flex-col ">
          <label className="flex  flex-col">
            <p className="flex items-start"> USERNAME</p>
            <input
              name={"username"}
              onChange={changeHandle}
              type="text"
              className=" px-2 h-16 text-white bg-black"
            />
          </label>
          <label className="flex item flex-col">
            <p className=" flex items-start  mt-3">PASSWORD</p>
            <input
              name={"password"}
              onChange={changeHandle}
              type="password"
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
    </div>
  );
}

export default Login;
