import { useEffect } from "react";

import useUsers from "../hooks/useUsers";

const UsersDashboardPage = () => {
    const { users, status, error, fetchUsers } = useUsers();

    useEffect(() => {
        if (status === "idle") {
            fetchUsers();
        }
    }, [status, fetchUsers]);

    return (
        <div>
            <h1>Users: {users.length}</h1>
            <p>Status: {status}</p>
            {error && <p>{error}</p>}
        </div>
    );
};

export default UsersDashboardPage;