import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    seat_number: {
        type: String,
        unique: [true, `Email already in use`],
        required: [true, `Please enter a valid email address`],
        lowercase: true,

    },
    password: {
        type: String,
        required: [true, `Password must be at least 8 characters`],
        minlength: [6, `Password must be at least 6 characters`],
    },
});

// Fire function for hashing the password before saving
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(5);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Static Method to login User
userSchema.statics.login = async function (seat_number, password) {
    const user = await this.findOne({ seat_number }); // Fix missing await
    if (user) {
        const auth = await bcrypt.compare(password, user.password); // Fix typo
        if (auth) {
            return user;
        } else {
            throw new Error('Incorrect password');
        }
    }
    throw new Error('User not found');
};

const User = mongoose.model('User', userSchema);
export default User;
