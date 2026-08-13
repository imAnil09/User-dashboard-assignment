import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsersAsync } from "../store/usersSlice";

const useUsers = () => {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);

    const fetchUsers = useCallback(() => {
        dispatch(fetchUsersAsync());
    }, [dispatch]);

    return {
        users,
        status,
        error,
        fetchUsers,
    };
};

export default useUsers;