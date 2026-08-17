import userService from "../services/user.service.js";
import HTTP_STATUS from '../constants/httpStatus.js';

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getUsers();

        res.status(HTTP_STATUS.OK).json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);

        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                message: "User not found",
            });
        }

        res.status(HTTP_STATUS.OK).json(user);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);

        res.status(HTTP_STATUS.CREATED).json(user);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const user = await userService.updateUser(
            req.params.id,
            req.body
        );

        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                message: "User not found",
            });
        }

        res.status(HTTP_STATUS.OK).json(user);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const user = await userService.deleteUser(req.params.id);

        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                message: "User not found",
            });
        }

        res.status(HTTP_STATUS.OK).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};