'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookmark = sequelize.define('bookmark', {
    url: DataTypes.STRING,
    clickCount: DataTypes.INTEGER,
    userID: DataTypes.INTEGER
  }, {});
  bookmark.associate = function(models) {
    // associations can be defined here

    bookmark.belongsTo(models.user, {
      foreignKey: {
        name: "userID",
        allowNull: false,
      }, 
      
    })
    bookmark.belongsToMany(models.tag, { through: 'bookmark_tags',
      onDelete: "CASCADE"
    })
  };
  return bookmark;
};