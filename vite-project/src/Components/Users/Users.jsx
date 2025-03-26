import React, { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")  // Update with your backend URL
            .then((res) => res.json())        // Convert response to JSON
            .then((data) => setUsers(data))   // Set data in state
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Seat Number</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.seat_number}>
                            <td>{user.name}</td>
                            <td>{user.seat_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
