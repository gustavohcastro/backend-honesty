import {Sequelize} from "sequelize";

const sequelize: Sequelize = new Sequelize(
    'grupow-honesty.chxc7doqvmjd.sa-east-1.rds.amazonaws.com',
    '',
    '',
    {
        dialect: "mysql"
    }
);

module.exports = sequelize
