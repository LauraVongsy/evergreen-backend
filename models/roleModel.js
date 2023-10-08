const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const Role = sequelize.define('roles', {
    id_role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    libelle_role: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    tableName: 'roles'
});

module.exports = Role;