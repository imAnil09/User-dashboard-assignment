import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../app/constants/routes";
import UserList from "../components/UserList";
import UserSearch from "../components/UserSearch";
import useUsers from "../hooks/useUsers";
import Button from "../../../shared/components/Button";

const UsersDashboardPage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const { users, status, error, fetchUsers } = useUsers();

    useEffect(() => {
        if (status === "idle") {
            fetchUsers();
        }
    }, [status, fetchUsers]);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (status === "loading") {
        return <div>Loading users...</div>;
    }

    if (status === "failed") {
        return <div>{error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-6 text-2xl font-semibold text-gray-900">
                    User Dashboard
                </h1>

                <div className="mb-6 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="w-full sm:max-w-md">
                        <UserSearch
                            value={searchQuery}
                            onChange={setSearchQuery}
                        />
                    </div>

                    <Button
                        type="button"
                        onClick={() => navigate(ROUTES.CREATE_USER)}
                        className="w-full text-sm sm:w-auto"
                    >
                        Create New User
                    </Button>
                </div>

                <UserList
                    users={filteredUsers}
                    onUserClick={(userId) => navigate(`/users/${userId}`)}
                />
            </div>
        </div>
    );
};

export default UsersDashboardPage;