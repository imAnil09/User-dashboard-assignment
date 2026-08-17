import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import UserForm from "@features/users/components/UserForm";
import useUsers from "@features/users/hooks/useUsers";

const CreateUserPage = () => {
    const navigate = useNavigate();
    const { createUser } = useUsers();

    const handleCreateUser = (user) => {
        createUser(user);
        toast.success("User created successfully");
        navigate("/users");
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="mx-auto max-w-2xl">
                <h1 className="mb-6 text-2xl font-semibold text-gray-900">
                    Create New User
                </h1>

                <UserForm onSubmit={handleCreateUser} />
            </div>
        </div>
    );
};

export default CreateUserPage;
