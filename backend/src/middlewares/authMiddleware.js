import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectedRoute = async (req, res, next) => {
  try {
    // Get token from headers
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Can not find access token" });
    }
    // Verify token

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (err) {
        console.log("JWT verification error:", err);
        return res
          .status(401)
          .json({ message: "Access token is expired or not correct" });
      }
      //Find user by ID from token
      const user = await User.findById(decoded.userId).select(
        "-hashedPassword"
      );
      // Verify user exists
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // Attach user to request object
      req.user = user;
      next();
    });
    // Find user by ID from token
  } catch (error) {
    console.log("Error when authorizing JWT in auth middleware");
    return res.status(401).json({ message: "Unauthorized" });
  }
};
