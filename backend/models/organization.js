import {Sequelize, Model, DataTypes} from 'sequelize';
const sequelize = new Sequelize(
    'smalltalk',
    'mac',
    null, {
        host: 'localhost',
        dialect: 'postgres'
    });

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
    }, {sequelize, modelName: "organizations"}
);

export default Organization;
