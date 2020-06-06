'use strict';
module.exports = (sequelize, DataTypes) => {
  let bookmark_tag = sequelize.define('bookmark_tag', {
    bookmarkID: DataTypes.INTEGER,
    tagID: DataTypes.INTEGER
  }, {});
  
  bookmark_tag.associate = function(models) {
    // associations can be defined here
  };
  return bookmark_tag;
};