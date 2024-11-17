import jwt from 'jsonwebtoken';

export const shouldBeLoggedIn = async (req, res) => {
    // console.log(req.userId);
    
    const token = req.cookies.token;
    console.log("Token from client: ", token);  // Add this line to log the token

    if (!token) {
        return res.status(401).json({ message: "Not Authenticated" });
    }

    try {
        // Verify the token
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("Token verified successfully, payload: ", payload); // Add this line to see the payload

        return res.status(200).json({ message: "Authenticated" });

    } catch (err) {
        console.error("Token verification error: ", err);  // Log the error
        return res.status(403).json({ message: "Not Authorized" });
    }
};

export const shouldBeAdmin = async (req, res) => {
    const token = req.cookies.token;
    console.log("Token from client: ", token); // Log the token

    if (!token) {
        return res.status(401).json({ message: "Not Authenticated" });
    }

    try {
        // Verify the token
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("Token verified successfully, payload: ", payload); // Log the payload

        // Check if the user is an admin
        if (!payload.isAdmin) {
            return res.status(403).json({ message: "Not an admin" });
        }

        // If the user is authenticated and an admin
        return res.status(200).json({ message: "Authenticated as Admin" });
    } catch (err) {
        console.error("Token verification error: ", err); // Log the error
        return res.status(403).json({ message: "Not Authorized" });
    }
};
