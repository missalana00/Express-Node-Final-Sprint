'use strict';
const { types } = require('./types');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', types, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Types', null, {});
  }
};
