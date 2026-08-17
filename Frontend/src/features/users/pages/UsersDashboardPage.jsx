import { useEffect } from "react";

import Button from "@shared/components/Button";
import UserList from "@features/users/components/UserList";
import UserSearch from "@features/users/components/UserSearch";
import useUsers from "@features/users/hooks/useUsers";
import Message from "@shared/components/Message";

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
        return <Message>Loading users...</Message>;
    }

    if (status === "failed") {
        return <Message>{error}</Message>;
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

                {filteredUsers.length === 0 ? (
                    <Message>No users found.</Message>
                ) : (
                    <UserList
                        users={filteredUsers}
                        onUserClick={handleUserClick}
                    />
                )}
            </div>
        </div>
    );
};

export default UsersDashboardPage;
