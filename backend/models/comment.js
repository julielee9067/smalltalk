import {Sequelize, Model, DataTypes} from 'sequelize';
const sequelize = new Sequelize(
    'smalltalk',
    'mac',
    null, {
        host: 'localhost',
        dialect: 'postgres'
    });

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
        references: {
            model: "users",
            key: "id"
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "posts",
            key: "id"
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {sequelize, modelName: "comments"});

export default Comment;