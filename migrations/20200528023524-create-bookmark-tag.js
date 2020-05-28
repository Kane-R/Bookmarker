'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookmark_Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookmarkID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'bookmarks'
          },
          key: 'id'
        },
        allowNull: false
      },
      tagID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tags'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookmark_Tags');
  }
};