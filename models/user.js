module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    googleId: DataTypes.STRING,
    displayName: DataTypes.STRING,

  }, {}, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, });
  User.associate = function(models) {
    // associations can be defined here

    User.hasMany(models.Bookmark, {
      onDelete: "cascade"
    })
  };
  return User;
};
