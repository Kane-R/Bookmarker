module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    googleId: DataTypes.STRING,
    displayName: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here

    user.hasMany(models.bookmark, {
      onDelete: "cascade",
    })
  };
  return user;
};
