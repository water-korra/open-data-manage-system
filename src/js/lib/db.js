const { Sequelize } = require("sequelize");
const options = {
  database: "mydb",
  username: "root",
  password: "VasyaLooser123",
  dialect: "mysql",
  define: {
    timestamps: false,
    freezeTableName: true,
  },

  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
};

module.exports = new Sequelize(options);
