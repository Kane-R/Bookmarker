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
        name: "userID",
        allowNull: false
      }
    })
    Bookmark.belongsToMany(models.Tag, { through: 'bookmark_tags',
      onDelete: "cascade"
    })
  };
  return Bookmark;
};