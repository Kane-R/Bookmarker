'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    
    Tag.hasMany(models.Bookmark_Tag, {
      onDelete: "cascade"
    })

  };
  return Tag;
};