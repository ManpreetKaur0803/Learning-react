import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  console.log("Profile context:", { user });
  if (!user) return <div>Please Login</div>;

  return <h4>Welcome {user.username}</h4>;
}

export default Profile;
