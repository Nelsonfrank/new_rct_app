import React, { useEffect, useState, useContext } from 'react';
//dependencies
import Profile from '../../../components/profile';
import { RouteComponentProps } from '@reach/router';
import Notification from '../../../../components/notification';
import { Auth } from '../../../../../auth/AuthContext';
import User1 from '../../../../../assets/images/10.jpg';

import { GetAllBuyers } from '../../../../../API';
// placeholder data

// export interface SellerProfileProps {}

const SellerProfile: React.FC<RouteComponentProps> = (props: any) => {
  const [buyers, setBuyers] = useState([]);
  const [request, setRequest] = useState<any>();

  const { userAccessToken } = useContext(Auth);

  const getAllBuyer = async () => {
    const response = await GetAllBuyers(userAccessToken).then(
      (response) => response,
    );
    if (response.status === 200) {
      const data = response.data.data
        .map((data: any) => {
          return {
            id: data.id,
            img: User1,
            title: data.name,
            cardDescrip: data.countryName,
            routes: 'sellers/profile',
            state: { data: { action: 'tender-request', userId: data.id } },
          };
        })
        .filter((item: any) => {
          return item.title !== null;
        });
      // console.log(data);
      const input = data.slice(0, 4);

      setBuyers(input);
    } else {
      Notification(false, 'Failed to Fetch Buyer', response.message);
    }
  };

  useEffect(() => {
    setRequest(props.location.state.data);
  }, [props.location.state.data]);

  const action = request && request.action;
  return (
    <>
      <Profile request={action} />
    </>
  );
};

export default SellerProfile;
