import { useNavigate } from "react-router-dom";
import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";

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
                <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                />

                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                />

                <Input
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    required
                />

                <Input
                    name="company"
                    type="text"
                    placeholder="Company"
                    required
                />

                <Button type="submit">
                    Create User
                </Button>

                <Button
                    type="button"
                    variant="secondary"
                    onClick={() => navigate(-1)}
                >
                    Back
                </Button>
            </div>
        </form>
    );
};

export default UserForm;