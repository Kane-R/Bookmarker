'use strict';
module.exports = (sequelize, DataTypes) => {
  let bookmark_Tag = sequelize.define('bookmark_tag', {
    bookmarkID: DataTypes.INTEGER,
    tagID: DataTypes.INTEGER
  }, {});
  
  bookmark_Tag.associate = function(models) {
    // associations can be defined here
  };
  return bookmark_Tag;
};