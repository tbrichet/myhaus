const Landlord = require('./Landlord');
const Tenant = require('./Tenant');
const Property = require('./Property');
const Post = require('./Post');
const Pet = require('./Pet');

Property.belongsTo(Landlord, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
});
 
Property.belongsTo(Tenant, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
});

Landlord.hasMany(Post, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
});

Tenant.hasMany(Post, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(Landlord, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(Tenant, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
});

Landlord.hasMany(Property, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
});

Tenant.hasMany(Pet, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
});

Landlord.hasMany(Pet, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
});

Pet.belongsTo(Landlord, {
    foreignKey: 'landlord_id',
    onDelete: 'CASCADE'
});

Pet.belongsTo(Tenant, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE'
});

module.exports = {
    Landlord,
    Tenant,
    Property,
    Post,
    Pet
};