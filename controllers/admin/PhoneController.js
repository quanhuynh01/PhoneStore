exports.getPhoneView = async (req,res)=>{
    res.render('admin/Phone/Phone',{layout:'admin/layouts/mainAdmin'});
}

exports.getPhoneDetail = async (req,res)=>{
    var slug = req.params.slug;
    res.status(200).json({slug:slug});
}
