export default
{
  nextOperations: [
    {
      date: '2016-01-06',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: {
        amount: 30000,
        currency: 'EUR',
      },
    },
    {
      date: '2017',
      user_id: 1,
      user_type: 'natural',
      type: 'cash_out',
      operation: {
        amount: 100,
        currency: 'EUR',
      },
    },
  ],
  fees: {
    cash_in: {
      natural: {
        percents: 0.03,
        max: {
          amount: 5,
          currency: 'EUR',
        },
      },
      juridical: {
        percents: 0.03,
        max: {
          amount: 5,
          currency: 'EUR',
        },
      },
    },
    cash_out: {
      natural: {
        percents: 0.3,
        week_limit: {
          amount: 1000,
          currency: 'EUR',
        },
      },
      juridical: {
        percents: 0.3,
        min: {
          amount: 0.5,
          currency: 'EUR',
        },
      },
    },
  },
  prevOperations: [{
    date: '2016-02-15',
    user_id: 1,
    user_type: 'natural',
    type: 'cash_out',
    operation: {
      amount: 300,
      currency: 'EUR',
    },
  }],
};
