import User from "../models/User.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });


  user.password = undefined; // Remove password from response
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export const register = async (req, res) => {
 try {
    const { name, username, email, password } = req.body;

    // Validate input
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new User({ name, username, email, password });
    newUser.save();

createSendToken(newUser, 201, res);
} catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const login = (req, res) => {
  res.status(200).json({
    message: "User logged in successfully",
  });
}

export const logout = (req, res) => {
  res.status(200).json({
    message: "User logged out successfully",
  });
}

export const getUser = (req, res) => {
  res.status(200).json({
    message: "User retrieved successfully",
  });
}
