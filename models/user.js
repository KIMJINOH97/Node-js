module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'user',
        {
            name: {
                type: DataTypes.STRING(20), // 자료형
                allowNull: false, // NULL이어도 돼?
                unique: true, // 고유값 여부
            },
            age: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT, // string보다 길게 받고싶으면
                allowNull: true,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: sequelize.literal('now()'), // 기본값 새로 생길 때 날짜 바로 등록
            },
        },
        { timestamps: false, underscored: true } // 타임스탬프는 시간, 언더바 false면 대문자 아니면 언더바
    );
};
// users 테이블
// 이름, 나이, 결혼여부, 자기소개, 생성일
// zero, 23, false, 안녕하세요, 2018-07-25
// nero, 32, true, 난 폭군이다, 2018-07-26
