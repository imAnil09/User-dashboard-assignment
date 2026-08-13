import apiClient from "../../../lib/api/apiClient";

export const fetchUsers = async () => {
    const { data } = await apiClient.get("/users");

    return data;
};