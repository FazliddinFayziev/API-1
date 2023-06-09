

// PROTECTION THE ROUTES.


const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token Provided');

    try {
        const decoded = jwt.verify(token, process.env.VIDLY_JWT_PRIVATE_KEY)
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).send('Invalid token.');
    }
}

module.exports = auth;

