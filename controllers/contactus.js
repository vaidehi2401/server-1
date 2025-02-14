const path = require('path');
const rootDir = require('../utils/path')
exports.contact=(req, res, next)=>{
    res.sendFile(path.join(rootDir , 'views', 'contact.html'))
}
exports.contactpost = (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
}
