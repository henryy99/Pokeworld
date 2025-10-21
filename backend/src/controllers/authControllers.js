import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import Session from "../models/Session.js";
export const signUp = async (req, res) => {
  try {
    // Extract user details from request body
    const { username, password, email, displayName } = req.body;

    // Basic validation
    if (!username || !password || !email || !displayName) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check for duplicate username
    const duplicate = await User.findOne({ username: username.toLowerCase() });
    if (duplicate) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    await User.create({
      username: username.toLowerCase(),
      hashedPassword,
      email: email.toLowerCase(),
      displayName: displayName,
    });

    //return
    return res.status(204).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error when signing up", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const ACCESS_TOKEN_TTL = "15m";
const REFRESH_TOKEN_TTL = 14 * 24 * 60 * 60 * 1000; //14 days in milliseconds

export const signIn = async (req, res) => {
  try {
    // Extract user details from request body
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Missing username or password" });
    }

    const user = await User.findOne({ username: username.toLowerCase() });
    if (!user) {
      return res
        .status(401)
        .json({ message: "Username or password is not correct" });
    }
    //Compare hashed password
    const passwordCorrect = await bcrypt.compare(password, user.hashedPassword);
    if (!passwordCorrect) {
      return res
        .status(401)
        .json({ message: "Username or password is not correct" });
    }

    //Create access Token with JWT
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_TTL }
    );

    //Create refresh Token with JWT
    const refreshToken = crypto.randomBytes(64).toString("hex");

    //Create session to save refresh Token

    await Session.create({
      userId: user._id,
      refreshToken,
      expiresAt: new Date(Date.now() + REFRESH_TOKEN_TTL),
    });

    //Return refresh token in cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: REFRESH_TOKEN_TTL,
    });
    return res
      .status(200)
      .json({ message: `User ${user.displayName} is logged in`, accessToken });
  } catch (error) {
    console.log("Error when signing in", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const signOut = async (req, res) => {
  try {
    //Take refresh token from cookies
    const token = req.cookies?.refreshToken;

    if (token) {
      //Delete refresh token from sessions collection
      await Session.deleteOne({ refreshToken: token });
      //delete cookie
      res.clearCookie("refreshToken");
    }
    return res.status(204).json({ message: "User signed out successfully" });
  } catch (error) {
    console.log("Error when signing out", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
