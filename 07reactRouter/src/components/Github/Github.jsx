import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="flex justify-center items-center h-96 gap-10">
      <div className="w-96 h-56 bg-orange-600 text-2xl rounded-lg text-white flex justify-center items-center">
        GitHub Follower: {data.followers}
      </div>
      <div className="w-96 h-56 bg-orange-600 text-2xl rounded-lg text-white flex justify-center items-center">
        <img
          src={data.avatar_url}
          alt="img"
          className="w-36 h-36 rounded-full"
        />
      </div>
    </div>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
