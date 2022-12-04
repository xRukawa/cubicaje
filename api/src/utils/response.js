exports.success = function (req, res, data) {
    const {error = false, status = 200, body = ''} = data;
    res.status(status).send({
        error,
        status,
        body
    })
}

exports.error = function (req, res, data) {
    const {error = false, status = 500, body = ''} = data;
    res.status(statusCode).send({
        error,
        status,
        body
    })
}