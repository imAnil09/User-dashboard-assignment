const Input = ({
    name,
    type = "text",
    placeholder,
    required = false,
    className = "",
    ...props
}) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            required={required}
            className={`rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 ${className}`}
            {...props}
        />
    );
};

export default Input;
