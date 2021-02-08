const rules = {
  admin: {
    static: [
      'variety:listing',
      'price-rate: listing',
      'price-rate: create',
      'price-rate: delete',
      'price-rate: edit',
      'seller: create',
      'seller: disable',
      'seller: delete',
      'seller: edit',
      'seller: MoreInfo',
      'buyer: listing',
      'buyer: disable',
      'buyer: delete',
      'leader: listing',
      'leader: delete',
      'platform: create',
      'platform: edit',
      'platform: delete',
      'tender-given: listing',
      'tender-given: disable',
      'tender-given: delete',
      'tender-given: view',
      'tender-request: listing',
      'tender-request: view',
      'tender-request: delete',
      'all: full-access',
    ],
  },
  leader: {
    static: [
      'variety:listing',
      'variety:create',
      'variety:edit',
      'seller: listing',
      'seller: create',
      'seller:edit',
      'seller:delete',
    ],
  },
  seller: {
    static: ['user:listing', 'cashout:listing', 'finance:module'],
  },
  buyer: {
    static: ['customer:listing', 'customer:followup', 'customer:viewQuestions'],
  },
};

export default rules;
