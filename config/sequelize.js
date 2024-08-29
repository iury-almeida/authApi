import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DBNAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.DBHOST,
    dialect: process.env.Dialect
});

export default sequelize


