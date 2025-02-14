const express= require('express');
const contact = require('../controllers/contactus')
const router = express.Router();
router.use('/',contact.contact)
router.post('/',contact.contactpost);
module.exports=router;