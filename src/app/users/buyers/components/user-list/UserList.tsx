import React, { useEffect, useState } from 'react';
// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

import Spinner from '../../../components/spinner';
import { GetSellersByVariety } from '../../../../../API';
import User5 from '../../../../../assets/images/12.png';

import { Empty } from 'antd';
// placeholder data
import Notification from '../../../../components/notification';
// export interface UserListProps {}

const UserList: React.FC<RouteComponentProps> = (props: any) => {
  const [sellerInfo, setSellerInfo] = useState<any>([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    const payload = {
      variety_selection: {
        ids: props.location.state.data.selectedVariety,
      },
    };
    console.log(props.location.state.data.selectedVariety);
    console.log(payload);
    const getSellerByVariety = async () => {
      const response = await GetSellersByVariety(
        props.location.state.data.selectedVariety,
      ).then((response) => response);
      setloading(false);
      console.log(response);
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
      {/* {sellerInfo.length !== 0 && ( */}
      <List
        btnTitle="Give Tender"
        routes="give-tender-form"
        itemData={sellerInfo}
        type="Give Tender"
      />
      {/* )} */}
      {loading ? <Spinner spinning={loading} /> : null}
    </div>
  );
};

export default UserList;
