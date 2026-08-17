import User from "../models/User.model.js";

const getUsers = async () => {
    return User.find();
};

const getUserById = async (userId) => {
    return User.findById(userId);
};

const createUser = async (userData) => {
    return User.create(userData);
};

export default {
    getUsers,
    getUserById,
    createUser,
};