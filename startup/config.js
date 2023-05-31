
module.exports = function () {
    if (!process.env.VIDLY_JWT_PRIVATE_KEY) {
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
    }
}