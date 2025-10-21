export const authMe = async (req, res) => {
  try {
    const user = req.user; // Assuming req.user is set by the protectedRoute middleware

    return res.status(200).json({ user });
  } catch (error) {
    console.log("Error when calling authMe", error);
    return res.status(500).json({ message: "Server error" });
  }
};
