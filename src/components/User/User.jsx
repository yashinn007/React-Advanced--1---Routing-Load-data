import React from "react";

const User = ({ user }) => {
  console.log(user);
  const { name, email, phone } = user;
  return (
    <div className="border rounded-2xl p-3 my-3 text-center">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
    </div>
  );
};

export default User;
