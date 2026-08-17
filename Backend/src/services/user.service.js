import User from "../models/User.model.js";

const getUsers = async () => {
    return User.find();
};

const getUserById = async (userId) => {
    return User.findById(userId);
};

export default {
    getUsers,
    getUserById,
};