import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UserDetailsPage = () => {
    const navigate = useNavigate();
    const { userId } = useParams();

    const user = useSelector((state) =>
        state.users.users.find((item) => item.id === Number(userId))
    );

    if (!user) {
        return <div>User not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="mx-auto max-w-3xl">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        User Details
                    </h1>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                    <h2 className="mb-4 text-xl font-semibold text-gray-900">
                        {user.name}
                    </h2>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-gray-900">{user.email}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="text-gray-900">{user.phone}</p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Company</p>
                            <p className="text-gray-900">
                                {user.company.name}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Website</p>
                            <p className="text-gray-900">{user.website || "Not available"}</p>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <h3 className="mb-4 text-lg font-semibold text-gray-900">
                            Address
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <p className="text-sm text-gray-500">Street</p>
                                <p className="text-gray-900">
                                    {user.address?.street || "Not available"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Suite</p>
                                <p className="text-gray-900">
                                    {user.address?.suite || "Not available"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">City</p>
                                <p className="text-gray-900">
                                    {user.address?.city || "Not available"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Zipcode
                                </p>
                                <p className="text-gray-900">
                                    {user.address?.zipcode || "Not available"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <h3 className="mb-4 text-lg font-semibold text-gray-900">
                            Geo-location
                        </h3>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Latitude
                                </p>
                                <p className="text-gray-900">
                                    {user.address?.geo?.lat || "Not available"}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Longitude
                                </p>
                                <p className="text-gray-900">
                                    {user.address?.geo?.lng || "Not available"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="mt-4 w-full rounded-md bg-gray-600 px-4 py-2 font-medium text-white cursor-pointer"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsPage;