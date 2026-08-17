import userService from "../services/user.service.js";

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getUsers();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);

        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export default {
    getUsers,
    getUserById,
    createUser,
};