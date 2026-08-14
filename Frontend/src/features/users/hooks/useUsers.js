import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTES } from "../../../app/constants/routes";
import {
    addUser,
    fetchUsersAsync,
} from "../store/usersSlice";

const useUsers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");

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

    const handleCreateUser = useCallback(() => {
        navigate(ROUTES.CREATE_USER);
    }, [navigate]);

    const handleUserClick = useCallback(
        (userId) => {
            navigate(`/users/${userId}`);
        },
        [navigate]
    );

    const handleSearch = useCallback((value) => {
        setSearchQuery(value);
    }, []);

    const filteredUsers = useMemo(() => {
        return users.filter((user) =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [users, searchQuery]);

    return {
        users,
        filteredUsers,
        searchQuery,
        status,
        error,
        fetchUsers,
        createUser,
        handleCreateUser,
        handleUserClick,
        handleSearch,
    };
};

export default useUsers;