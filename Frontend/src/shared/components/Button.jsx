const Button = ({
    type = "button",
    children,
    onClick,
    variant = "primary",
    className = "",
}) => {
    const buttonStyles =
        variant === "secondary"
            ? "bg-gray-600"
            : "bg-blue-600 hover:bg-blue-700";

    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-md px-4 py-2 font-medium text-white cursor-pointer ${buttonStyles} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;