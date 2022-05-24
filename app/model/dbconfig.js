const { Sequelize } = require("sequelize");
const persistent_path = process.env.PERSISTENT_STORAGE_DIR
 
const sequelize = new Sequelize("test-db", "user", "pass", {
  dialect: "sqlite",
  host: "./dev.sqlite"
});
 
module.exports = sequelize;