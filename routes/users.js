const express = require('express');
const router = express.Router();
const getUsers = require('../components/DB/./getUsers');
const getEmployees = require('../components/DB/./getEmployees');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/list/users',(req,res)=>{
  getUsers().then(data=>{
    let users=data;
    res.render("users", { title: 'Express'})
  }).catch(err=>{
    res.json(err)
  })
})
router.get('/list/employees',(req,res)=>{
  getEmployees().then(data=>{
    let employees=data;
    res.render("employees", { title: 'Express', employees})
  }).catch(err=>{
    res.json(err)
  })
})

module.exports = router;
