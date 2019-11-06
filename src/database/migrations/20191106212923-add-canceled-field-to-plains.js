module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('plains', 'canceled_at', {
      type: Sequelize.DATE,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('plains', 'canceled_at');
  },
};
