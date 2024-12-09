const slug = (title) => {
    // Chuyển chữ hoa thành chữ thường
    let slug = title.toLowerCase();

    // Thay thế các ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd'); 
    // Loại bỏ ký tự đặc biệt
    slug = slug.replace(/[^a-z0-9\s-]/g, ""); // Chỉ giữ lại ký tự chữ, số, khoảng trắng và gạch ngang 
    // Thay khoảng trắng thành dấu gạch ngang
    slug = slug.replace(/\s+/g, "-");  
    // Xóa gạch ngang ở đầu và cuối
    slug = slug.replace(/^-+|-+$/g, "");  
    return slug;
};
module.exports = slug;