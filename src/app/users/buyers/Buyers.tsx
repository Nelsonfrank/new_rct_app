import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import BuyerRoutes from './BuyerRoutes';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import BuyerProvider from '../../../context/buyers/BuyerContext';

// Props Types
// export interface BuyersProps {}

const Buyers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <BuyerProvider>
        <Navigation>
          <BuyerRoutes />
        </Navigation>
        <Footer />
      </BuyerProvider>
    </>
  );
};

export default Buyers;
