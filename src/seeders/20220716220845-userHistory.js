module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'User_Historics',
      [{
        id: 1,
        user_id: 1,
        asset_id: 1,
        type: 'venda',
        log: Sequelize.fn('now'),
        quantity: 2,
        amount: 85.69 * 2,
      },
      {
        id: 2,
        user_id: 1,
        asset_id: 2,
        type: 'venda',
        log: Sequelize.fn('now'),
        quantity: 2,
        amount: 2.22 * 2,
      },
      {
        id: 3,
        user_id: 4,
        asset_id: 4,
        type: 'venda',
        log: Sequelize.fn('now'),
        quantity: 2,
        amount: 28.96 * 2,
      },
      {
        id: 4,
        user_id: 3,
        asset_id: 2,
        type: 'venda',
        log: Sequelize.fn('now'),
        quantity: 7,
        amount: 3.00 * 7,
      },
      ],

      { timestamps: false },
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('User_Historics', null, {});
  },
};
