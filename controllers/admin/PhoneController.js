exports.getPhoneDetail = async (req,res)=>{
    var slug = req.params.slug;
    res.status(200).json({slug:slug});
}