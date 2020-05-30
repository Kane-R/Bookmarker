'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'John',
      email: 'john@john.com',
      password: 'john',
      oauthToken: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Betty',
      email: 'betty@betty.com',
      password: 'betty',
      oauthToken: null,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jake',
      email: 'jake@jake.com',
      password: 'jake',
      oauthToken: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
