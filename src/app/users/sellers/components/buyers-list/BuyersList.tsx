import React, { useState, useEffect, useContext } from 'react';

//Components
import List from '../../../components/list';
import { Empty } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { Auth } from '../../../../../auth/AuthContext';
import { GetAllBuyers } from '../../../../../API';
import Notification from '../../../../components/notification';
import User1 from '../../../../../assets/images/10.jpg';

// export interface BuyersListProps {}

const BuyersList: React.FC<RouteComponentProps> = () => {
  const [buyers, setBuyers] = useState([]);

  const { userAccessToken } = useContext(Auth);

  useEffect(() => {
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
              routes: 'sellers/profile',
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
    getAllBuyer();
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
          routes="tender-bid-form"
          itemData={buyers}
        />
      </div>
    </>
  );
};

export default BuyersList;
