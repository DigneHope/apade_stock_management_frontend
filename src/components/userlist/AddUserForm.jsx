// components/userlist/EditUserForm.jsx
import React, { useState } from "react";
import { updateUser } from "../../api/userApi";

const EditUserForm = ({ user, onUserUpdated }) => {
  const [form, setForm] = useState({ ...user });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(form.id, form);
      onUserUpdated();
      alert("User updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to update user!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} required />
      <input name="email" type="email" value={form.email} onChange={handleChange} required />
      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUserForm;
