import UserCard from "@features/users/components/UserCard";

const UserList = ({ users, onUserClick }) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    onClick={onUserClick}
                />
            ))}
        </div>
    );
};

export default UserList;