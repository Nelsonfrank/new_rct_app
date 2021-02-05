import React, { useEffect, useState, useContext } from 'react';
// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

import Spinner from '../../../components/spinner';
import { GetSellersByVariety } from '../../../../../API';
import User5 from '../../../../../assets/images/12.png';

// import { Empty } from 'antd';
// placeholder data

import { Buyer } from '../../../../../context/buyers/BuyerContextType';
import Notification from '../../../../components/notification';
// export interface UserListProps {}

const UserList: React.FC<RouteComponentProps> = (props: any) => {
  const [seller, setSellerInfo] = useState<any>([]);
  // const [loading, setloading] = useState(false);
  const { sellerInfo, path } = useContext(Buyer);

  const getSellerByVariety = async () => {
    const response = await GetSellersByVariety(
      props.location.state.data.selectedVariety,
    ).then((response) => response);
    // setloading(false);
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
  useEffect(() => {
    // setloading(true);
    console.log(path);
    const extractUsrInfo = () => {
      const data = {
        id: sellerInfo.item.id,
        image: User5,
        category: sellerInfo.item.category,
        ownerName: sellerInfo.item.full_name,
        user_location: sellerInfo.item.location,
        phone_number: sellerInfo.item.phone_number,
        platformLeader: sellerInfo.item.platform_leader,
      };
      setSellerInfo([data]);
    };
    path === 'seller_info' ? extractUsrInfo() : getSellerByVariety();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ minHeight: '700px' }}>
      {/* {seller.length !== 0 && ( */}
      <List
        btnTitle="Give Tender"
        routes="give-tender-form"
        itemData={seller}
        type="Give Tender"
      />
      {/* )} */}
      {/* {loading ? <Spinner spinning={loading} /> : null} */}
    </div>
  );
};

export default UserList;
