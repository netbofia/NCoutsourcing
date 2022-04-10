var express = require('express');
const getUsers = require("../components/DB/./getUsers");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  getUsers().then(data=>{
    let user=data[0].dataValues.email;
    res.render("users", { title: 'Express',users:data})
  }).catch(err=>{
    res.json(err)
  })
  //res.render('index', { title: 'Express' });
});

module.exports = router;
