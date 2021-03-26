const express = require ("express")
const router = express.Router()
const {getAllProducts,getProductById,} = require ("../controller/productControllers")

//@desc  get all products from DB
//@route get/api/products
//@accsess Public
router.get("/", getAllProducts)

//@desc  get all products from DB
//@route get/api/products/:id
//@accsess Public
router.get("/:id",getProductById)

module.exports =router 