'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      googleID: '1234',
      displayName: 'John',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      googleID: '4567',
      displayName: 'Betty',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      googleID: '8936',
      displayName: 'Jack',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
