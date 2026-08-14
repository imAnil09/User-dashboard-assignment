const Message = ({ children, className = "" }) => {
    return (
        <div
            className={`flex min-h-screen items-center justify-center bg-gray-50 p-4 ${className}`}
        >
            <p className="text-center text-gray-600">
                {children}
            </p>
        </div>
    );
};

export default Message;