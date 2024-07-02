function getProduct(){
    console.log("this is the product");
}

function editProduct(){
    console.log("this is the edit");
}

function deleteProduct(){
    console.log("this is the delete");
}

// module.exports.getProduct=getProduct



/* module.exports={
  "getProduct":getProduct,
  "editProduct": editProduct,
 "deleteProduct": deleteProduct,
} */
//this one can be written as down below as they are key value pair and if key value is same one can write key only


module.exports={
    getProduct,
    editProduct,
    deleteProduct,
  }






