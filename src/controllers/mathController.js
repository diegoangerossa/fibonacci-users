const {fibonacci} = require("../math")



const getFibonacci = (req, res) => {

    let stop = 20;
    let response = "";
    let {count} = req.query

    console.log(count)
    if (count){
        if (isNaN(count)){
            res.status(415).send(`El parametro "count" debe ser un numero`)
        }
        stop = req.query.count
    }

    for (let index = 0; index < stop; index++) {
        response += fibonacci(index).toString()
        if (index + 1 < stop) response += ", "         
    }       
    res.json({result: response})      
 
 }

 module.exports = {
    getFibonacci
 }