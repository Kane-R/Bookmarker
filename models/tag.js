'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    // associations can be defined here
    
    Tag.belongsToMany(models.Bookmark, { through: 'bookmark_tags',
      onDelete: "cascade"
    })

  };
  return Tag;
};