const UserCard = ({ user, onClick }) => {
    return (
        <div
            className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            onClick={() => onClick(user.id)}
        >
            <h2 className="mb-3 text-lg font-semibold text-gray-900">
                {user.name}
            </h2>

            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="mt-1 text-sm text-gray-600">{user.phone}</p>
            <p className="mt-1 text-sm text-gray-600">
                {user.company.name}
            </p>
        </div>
    );
};

export default UserCard;