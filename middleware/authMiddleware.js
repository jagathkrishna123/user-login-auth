import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        // Get Authorization header
        const authHeader = req.headers.authorization;

        // Check if token exists
        if (!authHeader) {
            return res.status(401).json({
                message: "Authentication required"
            });
        }

        // Authorization header format:
        // Bearer TOKEN

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Token not provided"
            });
        }

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store decoded user information in req.user
        req.user = decoded;

        // Continue to controller
        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

export default authMiddleware;
