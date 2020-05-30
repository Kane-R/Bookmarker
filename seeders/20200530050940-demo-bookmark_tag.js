'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bookmark_tags', [{
      bookmarkID: '2',
      tagID:'1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bookmarkID: '3',
      tagID: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      bookmarkID: '3',
      tagID: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bookmark_tags');
  }
};
