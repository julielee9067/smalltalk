const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:localhost:5432/smalltalk');


class Comment extends Model {
}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: "user",
        referenceKey: "id"
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: "post",
        referenceKey: "id"
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    modified_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
}, {sequelize, modelName: "comment"});

module.exports = Comment
