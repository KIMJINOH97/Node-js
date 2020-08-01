var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET home page. */
router.get('/', (req, res, next) => {
    User.findAll()
        .then((users) => {
            // 사용자들 먼저 조회하고
            res.render('sequelize', { title: '시퀄라이즈 연습', users: users }); // 키와 값이 같으면 생략가능
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

module.exports = router;
