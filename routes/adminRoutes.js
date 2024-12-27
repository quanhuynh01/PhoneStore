const express = require('express');
const route = express.Router();
const fs = require('fs');
const path = require('path'); 
const HomeController = require('../controllers/admin/HomeController');
const BrandController = require('../controllers/admin/BrandController');
const PhoneController = require('../controllers/admin/PhoneController');
const CategoryController = require('../controllers/admin/CategoryController');

const multer = require('multer');//sử dụng formdata

// Cấu hình multer để lưu file vào thư mục public/category
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Xác định đường dẫn thư mục
        const uploadPath = path.join(__dirname,'..', 'public', 'category');

        // Kiểm tra xem thư mục có tồn tại không
        if (!fs.existsSync(uploadPath)) {
            // Tạo thư mục nếu không tồn tại
            fs.mkdirSync(uploadPath, { recursive: true });
        } 
        cb(null, uploadPath);  // Đảm bảo thư mục tồn tại
    },
    filename: (req, file, cb) => {
        // Đặt tên file duy nhất
        cb(null, `${Date.now()}-${file.originalname}`);
    }
}); 
const upload = multer({ storage });



const verifyAdmin = require('../middleware/auth'); 

// Áp dụng verifyAdmin cho toàn bộ các route 
route.use(verifyAdmin);

// view
route.get('/',  HomeController.dashBoard); 
route.get('/brand',  BrandController.brandViewList);

//data
route.get('/brandList',  BrandController.getBrand);
route.delete('/brand/delete/:id',  BrandController.deleteBrand);
 

route.get('/phone',  PhoneController.getPhoneView);
route.get('/phone/edit/:slug',  PhoneController.getPhoneDetail);


route.get('/category',CategoryController.getViewCategory);


route.get('/category/getDataCategory',  CategoryController.getDataCategory); 
route.post('/category/addCategory', upload.single('iconFile'), CategoryController.addCategory);

module.exports = route;