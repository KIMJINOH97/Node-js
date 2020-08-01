const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development'; // 환경변수인데 개발용임 >>production 많은 패키지들이 배포용으로 설정이 바뀜
const config = require('../config/config.json')[env]; // config 개발환경에 따른 json파일을 불러와 환경변수를 설정 가능하게 함
const sequelize = new Sequelize(config.database, config.username, config.password, config); // 생성자임. 유저이름, 패스워드 데이터베이스 불러옴
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' }); // 1대 다 관계 연결 해줌 두테이블의 관계가 있을 시 서로의 키를 참조함
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' }); // belongs 에게 커멘트 컬럼이 생김, id를 커멘트 컬럼이 사용하도록
// 1대1(hasOne, belongsTo) 1대다(hasMany, belongsTo) 다대다(belongsToMany) #... 머머머 등등 이런 해쉬테그 해쉬테그로 검색할 때
module.exports = db;
