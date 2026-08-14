import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../services/userService";

export const fetchUsersAsync = createAsyncThunk(
    "users/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            return await fetchUsers();
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Failed to fetch users."
            );
        }
    }
);

const initialState = {
    users: [],
    status: "idle",
    error: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAsync.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });

        builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
            state.status = "succeeded";

            const localUsers = state.users.filter(
                (user) => !action.payload.some((apiUser) => apiUser.id === user.id)
            );

            state.users = [...action.payload, ...localUsers];
        });

        builder.addCase(fetchUsersAsync.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        });
    },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
