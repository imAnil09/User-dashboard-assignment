import { useNavigate } from "react-router-dom";

const UserForm = ({ onSubmit }) => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const user = {
            id: Date.now(),
            name: formData.get("name").trim(),
            email: formData.get("email").trim(),
            phone: formData.get("phone").trim(),
            company: {
                name: formData.get("company").trim(),
            },
        };

        onSubmit(user);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
        >
            <div className="grid gap-4">
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                />

                <input
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    required
                    className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                />

                <input
                    name="company"
                    type="text"
                    placeholder="Company"
                    required
                    className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
                />

                <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 cursor-pointer"
                >
                    Create User
                </button>
                <button
                    type="button"
                    className="rounded-md bg-gray-600 px-4 py-2 font-medium text-white cursor-pointer"
                    onClick={() => navigate(-1)}
                >
                    Back
                </button>
            </div>
        </form>
    );
};

export default UserForm;