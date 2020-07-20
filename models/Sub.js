module.exports = function (sequelize, DataTypes) {
  var Sub = sequelize.define("Sub", {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
      timestamps: false
    });
  return Sub;
};
