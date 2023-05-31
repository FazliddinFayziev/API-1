module.exports = function (err, req, res, next) {
    // 500 error
    res.status(500).send(err, "Something failed")
}