// dependencies
import React, { useEffect, useState } from 'react';

//component
import Card from '../../../../../components/card';
import { Counter } from '../../../../../../API';

// export interface InfoCardsProps {}

const InfoCards: React.FC = () => {
  const [counts, setCounts] = useState<any>({});

  useEffect(() => {
    const fetchCount = async () => {
      const response = await Counter().then((response) => response);
      if (response.status === 200) {
        setCounts(response.data.data);
        console.log(response.data.data);
      }
    };
    fetchCount();
  }, []);

  // const enumTitles = (title: string) => {
  //   switch (title) {
  //     case 'seller':
  //       return `Total Seller`;
  //     case 'platform':
  //       return `Total Platform`;
  //     case 'request_tender':
  //       return `TOTAL Tender Request`;
  //     case 'request_given':
  //       return `Total Tender Given`;
  //     case 'Buyer':
  //       return `Total Buyer`;
  //     default:
  //       break;
  //   }
  // };
  return (
    <div className="dashboard">
      <Card
        className="dashboard-card"
        title={(counts.platform && counts.platform.toString()) || '0'}
        subtitle="Total Platform"
        actionBtn="View More"
        actionBtnRoute="dashboard/platforms"
      />
      <Card
        className="dashboard-card"
        title={(counts.seller && counts.seller.toString()) || '0'}
        subtitle="Total Seller"
        actionBtn="View More"
        actionBtnRoute="dashboard/users/sellers"
      />
      <Card
        className="dashboard-card"
        title="432,578"
        subtitle="Total Buyers"
        actionBtn="View More"
        actionBtnRoute="dashboard/users/buyers"
      />
      <Card
        className="dashboard-card"
        title={(counts.tender_given && counts.tender_given.toString()) || '0'}
        subtitle="Total Tender Request"
        actionBtn="View More"
        actionBtnRoute="dashboard/tender-request"
      />
      <Card
        className="dashboard-card"
        title={
          (counts.tender_request && counts.tender_request.toString()) || '0'
        }
        subtitle="Total Tender Given"
        actionBtn="View More"
        actionBtnRoute="dashboard/tender-given"
      />
    </div>
  );
};

export default InfoCards;
