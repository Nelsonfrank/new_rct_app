import { createContext } from 'react';

const buyerContext = createContext({
  path: '',
  platformVariety: [],
  savePlatformVariety: (value, path) => {},
});

export const BuyerProvider = buyerContext.Provider;
export const BuyerConsumer = buyerContext.Consumer;
export const Buyer = buyerContext;
