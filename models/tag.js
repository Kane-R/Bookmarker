'use strict';
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define('tag', {
    name: DataTypes.STRING
  }, {});
  tag.associate = function(models) {
    // associations can be defined here
    
    tag.belongsToMany(models.bookmark, { through: 'bookmark_tags',
      onDelete: "CASCADE"
    })

  };
  return tag;
};