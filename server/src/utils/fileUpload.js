const multer = require('multer');
const path = require('path');

// Define storage for the uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '../uploads'); // Ensure the path exists
        cb(null, uploadPath); // Save to 'uploads/' directory
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        cb(null, uniqueSuffix + fileExtension); // Unique file name
    }
});

// Filter to accept only images (optional)
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

// Limit file size to 2MB (optional)
const limits = {
    fileSize: 2 * 1024 * 1024 // 2MB
};

// Initialize multer
const upload = multer({ storage: storage, fileFilter: fileFilter, limits: limits });

module.exports = upload;
