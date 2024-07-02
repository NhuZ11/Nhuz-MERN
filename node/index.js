/* global objects
    console.log
    settimeout
    __filename
    __dirname
    modules
    require
*/
/*node modules
    core
        -fs
        -path
        -http
    third party  eg:npm bcrypt
    local  
 */


console.log("this is node");

const bcrypt = require('bcrypt');
const saltRounds = 10;

function signUp(username,password){

}

signUp("ram","password")

const autho=require("./auth")
autho.autho()

//this is local module
const Product=require("./product")
Product.getProduct()
Product.deleteProduct()

//this is destructuring one
const{getProduct,editProduct,deleteProduct}=require("./product")
editProduct()