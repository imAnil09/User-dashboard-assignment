import { useEffect } from "react";

import Button from "../../../shared/components/Button";
import UserList from "../components/UserList";
import UserSearch from "../components/UserSearch";
import useUsers from "../hooks/useUsers";

const UsersDashboardPage = () => {
    const {
        filteredUsers,
        searchQuery,
        status,
        error,
        fetchUsers,
        handleCreateUser,
        handleUserClick,
        handleSearch,
    } = useUsers();

    useEffect(() => {
        if (status === "idle") {
            fetchUsers();
        }
    }, [status, fetchUsers]);

    if (status === "loading") {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <p className="text-gray-600">Loading users...</p>
            </div>
        );
    }

    if (status === "failed") {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
                <p className="text-center text-red-600">
                    {error}
                </p>
            </div>
        );
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
                            onChange={handleSearch}
                        />
                    </div>

                    <Button
                        type="button"
                        onClick={handleCreateUser}
                        className="w-full text-sm sm:w-auto"
                    >
                        Create New User
                    </Button>
                </div>

                <UserList
                    users={filteredUsers}
                    onUserClick={handleUserClick}
                />
            </div>
        </div>
    );
};

export default UsersDashboardPage;