// dependencies
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
// components
import { Empty } from 'antd';
import List from '../../../../../components/list';
import Platform1 from '../../../../../../../assets/images/slider-1.jpg';
import Notification from '../../../../../../components/notification';

import { GetSellerByPlatformId } from '../../../../../../../API';

// placeholder data

// export interface PlatformListProps {}

const PlatformList: React.FC<RouteComponentProps> = (props: any) => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    // console.log(props.location.state.data);
    const platformId = props.location.state.data.platformId;
    const getAllPlatform = async () => {
      const result = await GetSellerByPlatformId(platformId).then(
        (response) => response,
      );
      console.log(result);
      if (result.status === 200) {
        console.log(result.data.data.sellerInformations);
        const data = result.data.data.sellerInformations.map((item: any) => {
          return {
            id: item.id,
            image: Platform1,
            ownerName: item.full_name,
            category: item.application_type,
            user_location: item.location,
            phone_number: `0${item.phone_number}`,
            platform_name: item.platform_name,
            routes: 'buyers/give-tender-form',
          };
        });
        setSellers(data);
      } else {
        Notification(false, 'Failed to fetch Sellers', result.message);
      }
    };
    getAllPlatform();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {sellers.length !== 0 ? (
        <div
          style={{
            minHeight: '700px',
          }}
        >
          <List
            btnTitle="Give Tender"
            routes="give-tender-form"
            itemData={sellers}
            type="Give Tender"
          />
        </div>
      ) : (
        <div
          style={{
            height: '700px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Empty />
        </div>
      )}
    </>
  );
};

export default PlatformList;
