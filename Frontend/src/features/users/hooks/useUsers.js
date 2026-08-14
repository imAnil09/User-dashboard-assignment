import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    addUser,
    fetchUsersAsync,
} from "../store/usersSlice";

const useUsers = () => {
    const dispatch = useDispatch();

    const { users, status, error } = useSelector(
        (state) => state.users
    );

    const fetchUsers = useCallback(() => {
        dispatch(fetchUsersAsync());
    }, [dispatch]);

    const createUser = useCallback(
        (user) => {
            dispatch(addUser(user));
        },
        [dispatch]
    );

    return {
        users,
        status,
        error,
        fetchUsers,
        createUser,
    };
};

export default useUsers;