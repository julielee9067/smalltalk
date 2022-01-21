const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:localhost:5432/smalltalk');


class Organization extends Model {
}

Organization.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
    }, {sequelize, modelName: "organization"}
);

module.exports = Organization

