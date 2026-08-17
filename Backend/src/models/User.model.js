import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: [2, "Name must be at least 2 characters"],
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email address",
        ],
    },

    phone: {
        type: String,
        required: [true, "Phone is required"],
        trim: true,
    },

    company: {
        type: String,
        required: [true, "Company is required"],
        trim: true,
    },

    address: {
        city: {
            type: String,
            required: [true, "City is required"],
            trim: true,
        },

        zipcode: {
            type: String,
            required: [true, "Zipcode is required"],
            trim: true,
        },

        geo: {
            lat: {
                type: Number,
                required: [true, "Latitude is required"],
            },

            lng: {
                type: Number,
                required: [true, "Longitude is required"],
            },
        },
    },
});

const User = mongoose.model("User", userSchema);

export default User;