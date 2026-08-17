import userService from "../services/user.service.js";

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getUsers();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

export default {
    getUsers,
};