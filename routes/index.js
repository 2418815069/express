const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
router.post('/login', function (req, res) {
  let username = req.body.username;
  let password = req.body.password;
  if (username === 'admin' && password === '123456') {
    res.json({
      "status": 0,
      "data": {
        "_id": "5c3b297dea95883f340178b0",
        "password": "21232f297a57a5a743894a0e4a801fc3",
        "username": "admin",
        "create_time": 1547381117891,
        "__v": 0,
        "role": {
          "menus": []
        }
      }
    });
  } else {
    res.json({
      "status": 1,
      "msg": "用户名或密码不正确!"
    })
  }
  console.log(req, username, password);

});
module.exports = router;