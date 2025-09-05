import { useParams } from "react-router-dom";

import React from "react";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-96 h-56 bg-orange-600 text-2xl rounded-lg text-white flex justify-center items-center">
        User: {userid}
      </div>
    </div>
  );
};

export default User;
