'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    url: DataTypes.STRING,
    clickCount: DataTypes.INTEGER,
  }, {});
  Bookmark.associate = function(models) {
    // associations can be defined here

    Bookmark.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })

    Bookmark.hasMany(models.Bookmark_Tag, {
      onDelete: "cascade"
    })
  };
  return Bookmark;
};