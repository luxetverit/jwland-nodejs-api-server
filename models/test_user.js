const Sequelize = require('sequelize');
const db = require('.');
const { sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'tmp_user',
        {
            id: {
                type: Sequelize.STRING(16),
                allowNull: false,
                unique: true,
            },
            name: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            school: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            grade: {
                type: Sequelize.STRING(2),
                allowNull: true,
                unique: true,
            },
        },
        {
            timestamps: true,
            paranoid: true,
        }
    );
};

db.User = require();
