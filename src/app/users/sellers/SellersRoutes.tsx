import React from 'react';
// dependencies
import { Router } from '@reach/router';
//Components
import Home from './components/home';
import BuyersList from './components/buyers-list';
import TenderBids from './components/tender-bids';
import TenderBidForm from './components/tender-bid-form';
import UploadPictures from './components/upload-images';
import SellerProfile from './components/seller-profile';
import GiveQuoteForm from './components/quote-form';
import MarketPlace from '../components/market-info';
// import { AuthConsumer } from '../../../auth/AuthContext';

// export interface SellersRoutesProps {}

const SellersRoutes: React.FC = () => {
  return (
    <Router primary={false}>
      <Home path="/" />
      <TenderBidForm path="tender-request-form" />
      <BuyersList path="buyers-list" />
      <TenderBids path="tender-bids" />
      <UploadPictures path="upload-images" />
      <SellerProfile path="profile" />
      <GiveQuoteForm path="quote-form" />
      <MarketPlace path="market-info" />
    </Router>
  );
};

export default SellersRoutes;
