var express = require('express');
var router = express.Router();
var { User } = require('../models'); // 사용자 가져오기

/* GET users listing. */
router.get('/', (req, res, next) => {
    User.findAll() //모두 가져와서, promise라 then가능
        .then((users) => {
            // users에 배열로 담긴다
            res.json(users); // 배열을 json
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

// 프론트에서 등록 버튼을 누르면 post users로 요청이 간 다음에 요청에 실린 본문을 app.js쪽에서 분석해서 req.body에 넣어줌
router.post('/', (req, res, next) => {
    User.create({
        name: req.body.name,
        age: req.body.age,
        married: req.body.married,
    })
        .then((result) => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

module.exports = router;
