module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'comment',
        {
            comment: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('now()'),
            },
        },
        { timestamps: false, underscored: true }
    );
};

// comment 테이블
// 아이디, 작성자, 댓글 내용, 생성일
// 1,   zero, 안녕하세요, 2018-07-25
// 2,   nero, 으하하하, 2018-07-26
