import User from "../models/User.model.js";

const getUsers = async () => {
    return User.find();
};

export default {
    getUsers,
};