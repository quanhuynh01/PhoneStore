const Category = require('../../models/Category');

// Trang chủ
exports.Index = async (req, res) => {
    let title = "Phone Store";
    let desc = "Điện thoại giá rẻ "; 
    try { 
        // Render view với dữ liệu
        res.render("user/index", { 
            title,
            desc,
            layout: 'user/layouts/main'
        });
    } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error);
        res.status(500).send("Có lỗi xảy ra khi tải trang chủ.");
    }
};
