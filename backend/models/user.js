import {Sequelize, Model, DataTypes} from 'sequelize';
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    null, {
        host: 'localhost',
        dialect: 'postgres'
});

class User extends Model {
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    organization_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "organizations",
            key: "id"
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_logged_in: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
}, {sequelize, modelName: "users"});

export default User;
