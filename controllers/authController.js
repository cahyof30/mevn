import User from "../models/User.js";

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

    res.status(201).json({ message: "User registered successfully" });
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
