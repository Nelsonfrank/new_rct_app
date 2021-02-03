import React from 'react';

//Components
import { Router } from '@reach/router';
import Home from './components/home';
import UserList from './components/user-list';
import Platform from './components/platforms';
import PlatformList from './components/platforms/components/platform-list';
import TenderRequests from './components/tender-requests';
import TenderRequestForm from './components/TenderRequestForm';
import MarketInfo from '../components/market-info';
import BuyerProfile from './components/buyer-profile';
// Auth
import { AuthConsumer } from '../../../auth/AuthContext';
// export interface BuyerRoutesProps {}

const BuyerRoutes: React.FC = () => {
  return (
    <AuthConsumer>
      {({ userAccessToken }) =>
        userAccessToken ? (
          <Router primary={false}>
            <Home path="/" />
            <UserList path="shop-by-sellers" />
            <Platform path="shop-by-platforms" />
            <PlatformList path="platform-subscriber-list" />
            <TenderRequests path="tender-requests" />
            <TenderRequestForm path="tender-request-form" />
            <MarketInfo path="market-info" />
            <BuyerProfile path="profile" />
          </Router>
        ) : (
          <Router primary={false}>
            <Home path="/" />
            <UserList path="shop-by-sellers" />
            <Platform path="shop-by-platforms" />
            <PlatformList path="platform-subscriber-list" />
            <TenderRequests path="tender-requests" />
            <TenderRequestForm path="tender-request-form" />
            <MarketInfo path="market-info" />
            <BuyerProfile path="profile" />
          </Router>
        )
      }
    </AuthConsumer>
  );
};

export default BuyerRoutes;
