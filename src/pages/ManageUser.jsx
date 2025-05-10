import React, { useEffect, useState } from 'react';
import './ManageUser.css';

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ id: '', name: '' });

  useEffect(() => {
    setUsers([{ id: '1', name: 'hope' }]);
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserData = { id: `user:${users.length + 1}`, name: newUser.name };
    setUsers([...users, newUserData]);
    setNewUser({ name: '' });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setEditForm({ id: '', name: '' });
    }
  };

  const handleEditClick = (user) => {
    setEditingId(user.id);
    setEditForm({ id: user.id, name: user.name });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setUsers(users.map((user) => (user.id === editForm.id ? { ...user, name: editForm.name } : user)));
    setEditingId(null);
    setEditForm({ id: '', name: '' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ id: '', name: '' });
  };

  return (
    <div className="manage-users">
      <h2>User management</h2>
      <div className="add-user-form">
        <h3>Add new user</h3>
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            placeholder="User Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
          <button type="submit">Add User</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingId === user.id ? (
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    required
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingId === user.id ? (
                  <>
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(user)}>edit</button>
                    <button onClick={() => handleDeleteUser(user.id)}>delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;