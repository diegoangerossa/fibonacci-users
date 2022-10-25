const testMiddleware = (req, res, next) =>{
    console.log("este es mi primer middleware");

    next();
}


module.exports = {
    testMiddleware
}