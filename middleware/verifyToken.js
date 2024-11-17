import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Not authenticated" });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if (err) {
            return res.status(403).json({ message: "Token not valid" });
        }
        
        req.userId = payload.id; // Attach the user ID to the request object
        next(); // Pass control to the next middleware or route handler
    });
};
