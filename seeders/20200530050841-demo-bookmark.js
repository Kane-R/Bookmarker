'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bookmarks', [{
      url: 'https://google.com',
      clickCount: null,
      userID: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: 'https://xkcd.com',
      clickCount: null,
      userID: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      url: 'https://reddit.com',
      clickCount: null,
      userID: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('bookmarks', null, {});
  }
};
