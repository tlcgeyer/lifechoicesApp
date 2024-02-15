// Creating a error handling middleware: to handle any potential error we might encounter when running the server.
/*If we passing next as an argument it means that we are making use of a middleware */
function errorHandling(err, req, res, next ) {
    if(err || res.statusCode >= 400) {
        res.json({
            statusCode: err.status || res.
            statusCode || 500, //problem with the api/server
            msg: 'Apologies, there seems to be an error in the server. Please try again later.'
        })
    }else {
        next()
    }
}
export {
    errorHandling
}