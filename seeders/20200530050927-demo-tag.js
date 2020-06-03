'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tags', [{
      name: 'comic',
      userID: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'general',
      userID: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'blogs',
      userID: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tags');
  }
};
