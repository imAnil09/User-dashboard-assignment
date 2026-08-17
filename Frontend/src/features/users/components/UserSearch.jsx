import Input from "@shared/components/Input";

const UserSearch = ({ value, onChange }) => {
    return (
        <Input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Search users by name"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500"
        />
    );
};

export default UserSearch;
