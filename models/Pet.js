const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        tenant_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tenant',
                key: 'id'
            }
        },
        landlord_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'landlord',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet'
    }
);

module.exports = Pet;