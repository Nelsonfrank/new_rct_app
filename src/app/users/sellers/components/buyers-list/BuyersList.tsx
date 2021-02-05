import React, { useState, useEffect, useContext } from 'react';

//Components
import List from '../../../components/list';
import { Empty } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { Auth } from '../../../../../auth/AuthContext';
import { GetAllBuyers } from '../../../../../API';
import Notification from '../../../../components/notification';
import User1 from '../../../../../assets/images/10.jpg';
import { Buyer } from '../../../../../context/buyers/BuyerContextType';

// export interface BuyersListProps {}

const BuyersList: React.FC<RouteComponentProps> = () => {
  const [buyers, setBuyers] = useState<any>([]);

  const { userAccessToken } = useContext(Auth);

  const { sellerInfo, path } = useContext(Buyer);

  const getAllBuyer = async () => {
    const response = await GetAllBuyers(userAccessToken).then(
      (response) => response,
    );
    if (response.status === 200) {
      const data = response.data.data
        .map((data: any) => {
          return {
            id: data.id,
            image: User1,
            ownerName: data.name,
            user_location: data.countryName,
            phone_number: `0${data.phone_number}`,
            routes: 'sellers/buyer-list',
            state: { data: 'tender-request' },
          };
        })
        .filter((item: any) => {
          return item.title !== null;
        });
      console.log(data);
      const input = data.slice(0, 4);

      setBuyers(input);
    } else {
      Notification(false, 'Failed to Fetch Buyer', response.message);
    }
  };
  useEffect(() => {
    const extractUsrInfo = () => {
      const data = {
        id: sellerInfo.item.id,
        image: User1,
        category: sellerInfo.item.category,
        ownerName: sellerInfo.item.full_name,
        user_location: sellerInfo.item.location,
        phone_number: `0${sellerInfo.item.phone_number}`,
        platformLeader: sellerInfo.item.platform_leader,
      };
      setBuyers([data]);
    };
    path === 'seller_info' ? extractUsrInfo() : getAllBuyer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div
        style={{
          minHeight: '700px',
        }}
      >
        <List
          btnTitle="Request Tender"
          routes="request-tender-form"
          itemData={buyers}
          type="request-tender"
        />
      </div>
    </>
  );
};

export default BuyersList;
