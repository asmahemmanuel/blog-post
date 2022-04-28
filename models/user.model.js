import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
    },
    firstName: {
        type: String,
        required: [true, "firstName is required"],
    },
    lastName: {
        type: String,
        required: [true, "lastName is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
    },
},
{
    timestamps: true,
}
);

export default mongoose.models.User || mongoose.model("User", userSchema);