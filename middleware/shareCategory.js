const Category = require('../models/Category'); 
 
// Middleware để lấy danh mục
const getCategoriesMiddleware = async (req, res, next) => {
    try {
        const categories = await Category.findAll({
            where: {
                ParentCategoryId: null,
                Level: null
            }
        });
        // Truyền vào view (res.locals là nơi lưu trữ dữ liệu chung cho tất cả các view)
        res.locals.categories = categories;
        next();  // Tiến hành tiếp tục với request tiếp theo
    } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
        res.status(500).send("Có lỗi xảy ra khi tải danh mục.");
    }
};
  
module.exports = getCategoriesMiddleware;