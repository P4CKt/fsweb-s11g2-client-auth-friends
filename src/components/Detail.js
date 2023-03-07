import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:9000/api/friends/${id}`)
      .then((res) => {
        console.log(res.data);
        setDetail(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="flex mt-16 p-6 flex-col items-center">
      <div className="font-black flex flex-col text-left text-[24px]">
        <h1 className="font-black text-center text-[70px]">FRIEND DETAIL</h1>

        <div className="flex flex-col justify-between  mt-[18px]">
          <ul className=" bg-black p-2 rounded-md  text-white my-2 text-right flex justify-between">
            <span className="text-gray-200">NAME:</span> {detail.name}
          </ul>
          <ul className=" bg-black p-2 rounded-md text-white  my-2 text-right flex justify-between">
            <span className="text-gray-200">AGE:</span>
            {detail.age}
          </ul>
          <ul className=" bg-black p-2 rounded-md text-white mt-2 text-right flex justify-between">
            <span className="text-gray-200">EMAIL:</span> {detail.email}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;
