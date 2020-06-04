module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    googleId: DataTypes.STRING,
    displayName: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    User.hasMany(models.Bookmark, {
      onDelete: "cascade"
    })
  };
  return User;
};
