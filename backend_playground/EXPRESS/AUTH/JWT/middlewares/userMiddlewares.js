import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.toLowerCase().startsWith('bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Getting the user from the token
            req.user = await userModel.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.log(error);
            return res.status(401).send("Not authorized!");
        }
    }

    if (!token) {
        console.log("No token provided");
        return res.status(401).send("No token provided");
    }
};

export default protect;
