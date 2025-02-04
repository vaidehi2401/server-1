const express= require('express');
const router = express.Router();
router.use('/add-product',(req, res, next)=>{
    res.send(
`<form action ="/product" method = "POST">
<input type="text" name="title">
<input type="text" name="size">
<button type="submit">Add</button>
</form>`
        )
  
})
router.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports=router;