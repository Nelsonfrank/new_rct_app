// dependencies
import React, { useState, useEffect, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
// components
import { Empty } from 'antd';
import List from '../../../../../components/list';
import Platform1 from '../../../../../../../assets/images/slider-1.jpg';
import Notification from '../../../../../../components/notification';
import { Buyer } from '../../../../../../../context/buyers/BuyerContextType';
import {
  GetSellerByPlatformId,
  GetVarietyByPlatformId,
} from '../../../../../../../API';

// placeholder data

// export interface PlatformListProps {}

const PlatformList: React.FC<RouteComponentProps> = (props: any) => {
  const [sellers, setSellers] = useState([]);

  const { savePlatformVariety } = useContext(Buyer);
  const getAllPlatform = async (platformId: any) => {
    const result = await GetSellerByPlatformId(platformId).then(
      (response) => response,
    );
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

  const getVarityByPlatformId = async (platformId: string) => {
    const response = await GetVarietyByPlatformId(platformId).then(
      (response) => response,
    );
    console.log(response);
    if (response.status === 200) {
      console.log(response.data.data);
      const data = response.data.data.map(
        (item: { id: any; variety_name: any }) => {
          return {
            key: item.id,
            name: item.variety_name,
          };
        },
      );
      savePlatformVariety(data, 'platform_list');
    }
  };

  useEffect(() => {
    // console.log(props.location.state.data);
    const platformId = props.location.state.data.platformId;
    getVarityByPlatformId(platformId);
    getAllPlatform(platformId);
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
