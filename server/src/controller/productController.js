const { createProductValidation } = require("../validation/productValidation");
const Products = require('../model/productModel');
const upload = require("../utils/fileUpload"); // Multer configuration

// Updated createProduct controller with file upload
exports.createProduct = async (req, res) => {
    // Use multer to handle the file upload
    upload.single('productImage')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ success: false, message: err.message });
        }

        try {
            // Validate the product details using the validation logic
            const { error } = createProductValidation(req.body);
            if (error) {
                return res.status(400).json({ success: false, message: error.details[0].message });
            }

            // Add the uploaded file's path to the request body if a file was uploaded
            if (req.file) {
                req.body.productImage = req.file.path;
            }

            // Create the new product with the request body (including file path if available)
            const newProduct = await Products.create(req.body);

            // If product creation fails
            if (!newProduct) {
                return res.status(400).json({ success: false, message: 'Please enter valid input fields' });
            }

            // Success response
            return res.status(200).json({ success: true, message: 'Product created successfully', data: newProduct });
        } catch (error) {
            // Handle any other errors
            console.error(error);
            return res.status(500).json({ success: false, message: 'Error during product creation' });
        }
    });
};

exports.getAllProducts = async (req, res) => {
    try {
        const getAllProduct = await Products.find()
        if (getAllProduct === 0) {
            return res.status(200).json({ success: true, message: 'There is no any product in Database' })
        }
        return res.status(200).json({ success: true, message: 'Data retrive successfull', data: getAllProduct })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Error on the getting product' })
    }
}