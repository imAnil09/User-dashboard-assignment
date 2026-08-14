const Input = ({ name, type = "text", placeholder, required = false }) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            className="rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />
    );
};

export default Input;