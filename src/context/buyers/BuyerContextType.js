import { createContext } from 'react';

const buyerContext = createContext({
  path: '',
  platformVariety: [],
  sellerInfo: {
    item: {
      id: '',
      image: '',
      category: '',
      full_name: '',
      location: '',
      phone_number: '',
      platform_leader: '',
    },
  },
  savePlatformVariety: (value, path) => {},
  saveSellerInfo: (value, path) => {},
});

export const BuyerProvider = buyerContext.Provider;
export const BuyerConsumer = buyerContext.Consumer;
export const Buyer = buyerContext;
