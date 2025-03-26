export const fetchUsers = async () => {
    try {
        const response = await fetch("http://localhost:5000/users"); // Backend API
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        return await response.json(); // Return user data
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};
