// components/users/UserForm.jsx
import React, { useState } from "react";
import { addUser } from "../../api/userApi"; // Assuming you have this function in your user API file

const UserForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(userData);  // Call API to add user
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
