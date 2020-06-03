'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tags', [{
      name: 'comic',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'general',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'blogs',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tags');
  }
};
