import React, { use } from "react";

const Users2 = ({ users2Promise }) => {
  const users = use(users2Promise);
  console.log("users2 data:", users);
  return <div>This is Users2</div>;
};

export default Users2;
