const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Property extends Model {}

Property.init({
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    address: DataTypes.STRING,
    complex: DataTypes.STRING,
    unit: DataTypes.STRING,
    rent: {
        type: DataTypes.INTEGER,
        defaultValue: 1000
    },
    maintenance: {
        type: Sequelize.BOOLEAN,
        defaultValue: false

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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'property'
}
);

module.exports = Property;