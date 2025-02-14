
const bodyParser = require('body-parser');
const express = require('express')
const success= require('./controllers/succes')
//const rootDir = require('../utils/path')
const path = require('path');
const app=express();
app.use(express.static(path.join(__dirname, 'public')))
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact');
app.use(bodyParser.urlencoded({extended:false}))
app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)
app.use('/contact',contactRoutes)
app.use('/success', success.successpage)
app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})
app.listen(3001);
