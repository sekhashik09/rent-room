import bcrypt from 'bcrypt';
import User from '../model/usermodel.js';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

// Register function
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();

        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Login function
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id,isAdmin:false },  process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

        // Convert Mongoose document to plain object
        const userObj = user.toObject();
        delete userObj.password; // Exclude the password fields

        // Set cookie with the token
        res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'lax' });

        return res.status(200).json({ message: "Login successful", userInfo: userObj });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Logout function
export const logout = (req, res) => {
    // Clear the cookie
    res.clearCookie('token');
    return res.status(200).json({ message: "Logout successful" });
};
