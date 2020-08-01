const express = require('express');
const router = express.Router();
const { User, Comment } = require('../models');

// GET /comment와 GET/comment/id는 다르다
router.get('/:id', (req, res, next) => {
    Comment.findAll({
        include: {
            model: User, // 사용자 아이디의comment를 전 부 가져옴 사용자 table과 comment table을 연결 해줘야함 <table(모델)끼리 연결>
            where: { id: req.params.id }, // 사용자의 id가 뭔지 url parameter는 req.params에 있음 위의 id와 params.id의 id가 같아야함
        },
    })
        .then((comments) => {
            console.log(comments);
            res.json(comments);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
}); // 걍 외우기

router.patch('/:id', (req, res, next) => {
    Comment.update({ comment: req.body.comment }, { where: { id: req.params.id } }) // 수정하기
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
});

router.delete('/:id', (req, res, next) => {
    Comment.destroy({
        // 삭제해라
        where: { id: req.params.id },
    });
});

// 생성은 한 번만 할 수 있으므로 그리고 게시하고 뒤에 id가 나오므로
router.post('/', (req, res, next) => {
    Comment.create({
        commenter: req.body.id,
        comment: req.body.comment,
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
