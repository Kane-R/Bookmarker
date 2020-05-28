'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark_Tag = sequelize.define('Bookmark_Tag', {
    bookmarkID: DataTypes.INTEGER,
    tagID: DataTypes.INTEGER
  }, {});
  Bookmark_Tag.associate = function(models) {
    // associations can be defined here
  };
  return Bookmark_Tag;
};