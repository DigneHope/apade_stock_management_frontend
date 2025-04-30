import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import userApi from '../api/userApi';
import AnimatedPage from '../components/AnimatedPage';
import Loader from '../components/Loader';
import './ManageUsers.css'; 
import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';
//
//  👈 We'll style it next!

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(true);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const response = await userApi.getUsers();
      setUsers(response);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load users');
    }
  };

  useEffect(() => {
    fetchUsers();
    setTimeout(() => setLoading(false), 1000); // fake a loading spinner
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Add new user
  const handleAddUser = async () => {
    if (!newUser.username || !newUser.password) {
      toast.warning('Please fill all fields');
      return;
    }
    try {
      await userApi.addUser(newUser);
      toast.success('User added successfully!');
      setNewUser({ username: '', password: '' });
      fetchUsers();
    } catch (error) {
      console.error(error);
      toast.error('Failed to add user');
    }
  };

  // Delete user
  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await userApi.deleteUser(id);
        toast.success('User deleted successfully!');
        fetchUsers();
      } catch (error) {
        console.error(error);
        toast.error('Failed to delete user');
      }
    }
  };

  if (loading) return <Loader />;

  return (
    <AnimatedPage>
      <div className="manage-users-container">
        <h2>Manage Users</h2>

        <div className="add-user-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={newUser.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={newUser.password}
            onChange={handleChange}
          />
          <button onClick={handleAddUser}>Add User</button>
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                <td>{user.user_id}</td>
                <td>{user.username}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteUser(user.user_id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimatedPage>
  );
}

export default ManageUsers;
