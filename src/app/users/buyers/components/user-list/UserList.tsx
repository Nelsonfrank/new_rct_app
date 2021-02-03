import React, { useEffect, useState } from 'react';
// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

import { GetSellersByVariety } from '../../../../../API';
import User5 from '../../../../../assets/images/12.png';

// placeholder data
import Notification from '../../../../components/notification';
// export interface UserListProps {}

const UserList: React.FC<RouteComponentProps> = (props: any) => {
  const [sellerInfo, setSellerInfo] = useState<any>([]);
  useEffect(() => {
    const payload = {
      variety_selection: {
        ids: props.location.state.data.selectedVariety,
      },
    };
    console.log(props.location.state.data.selectedVariety);
    console.log(payload);
    const getSellerByVariety = async () => {
      const response = await GetSellersByVariety(payload).then(
        (response) => response,
      );

      if (response.status === 200) {
        const data = response.data.data.map(
          (item: {
            id: any;
            category: any;
            image: any;
            full_name: any;
            location: any;
            phone_number: any;
            platform_leader: any;
          }) => {
            return {
              id: item.id,
              image: User5,
              category: item.category,
              ownerName: item.full_name,
              user_location: item.location,
              phone_number: item.phone_number,
              platformLeader: item.platform_leader,
            };
          },
        );

        setSellerInfo(data);
      } else {
        Notification(false, 'Failed to fetch Seller');
      }
      // console.log(response);
    };
    getSellerByVariety();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <List
        btnTitle="Give Tender"
        routes="tender-request-form"
        itemData={sellerInfo}
      />
    </div>
  );
};

export default UserList;
