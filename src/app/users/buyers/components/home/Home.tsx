import React, { useState, useEffect } from 'react';

// Components
import Header from '../../../components/header';
import CardSection from '../../../components/section-card-list';
import Card from '../../../../components/card';
import { navigate, RouteComponentProps } from '@reach/router';
import { Modal, Checkbox } from 'antd';
import {
  GetAllPlatform,
  GetAllUsers,
  GetAllVariety,
  BASEURL,
} from '../../../../../API';
import Notification from '../../../../components/notification';
import Platform1 from '../../../../../assets/images/slider-1.jpg';

// placeholder data
import { TenderRequestsData } from './BuyerSectionData';
//Styles
import './Home.less';
// export interface BuyerHomeProps {}
type platformPropsType = {
  id: number;
  img: string;
  title: string;
  cardDescrip: string;
  routes: string;
}[];

type varietyProps = {
  key: string;
  name: string;
  platform: string;
  region: string;
  added_by: string;
}[];

const BuyerHome: React.FC<RouteComponentProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [platforms, setPlatforms] = useState<platformPropsType>([]);
  const [sellers, setSellers] = useState<platformPropsType>([]);
  const [variety, setVariety] = useState<varietyProps>([]);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getAllPlatform = async () => {
    const result = await GetAllPlatform().then((response) => response);
    console.log(result);
    if (result.status === 200) {
      const data = result.data.data.platform.map((item: any) => {
        return {
          id: item.id,
          title: item.platform_name,
          platform_region: item.platform_region,
          img: Platform1,
          cardDescrip: item.number_of_members.toString() || '0',
          routes: 'buyers/platform-subscriber-list',
          state: { data: { platformId: item.id } },
        };
      });
      const input = data.slice(0, 4);
      setPlatforms(input);
    } else {
      Notification(false, 'Failed to fetch Platform');
    }
  };

  const getSellers = async () => {
    const result = await GetAllUsers().then((response) => response);
    if (result.status === 200) {
      const res = result.data.data.sellerInformations.map((item: any) => {
        return {
          id: item.id,
          img: Platform1,
          title: item.full_name,
          cardDescrip: item.application_type,
          routes: 'sellers/user-profile',
        };
      });
      const info = res.slice(0, 4);
      setSellers(info);
    } else {
      Notification(false, 'Failed to fetch sellers', result.messages);
    }
  };

  const getAllVariety = async () => {
    const varietyResponse = await GetAllVariety().then((response) => response);

    if (varietyResponse.status === 200) {
      const data = varietyResponse.data.data.map((item: any) => {
        return {
          key: item.id,
          name: item.variety_name,
        };
      });
      setVariety(data);
      // console.log(data);
    } else {
      Notification(false, 'Fail to Fetch Variety');
    }
  };
  useEffect(() => {
    getAllVariety();
    getAllPlatform();
    getSellers();
  }, []);

  function handleVarietyChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }
  return (
    <>
      <Header />
      <div className="buyer--card_group">
        <Card
          subtitle="1. Give Tender"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
          isHoverable
        >
          <div>
            <p style={{ fontSize: 16 }}>
              A formal, structured procedure for generating competing offers
              from different potential suppliers or contractors looking to
              obtain an award of business activity in works, supply.
            </p>
          </div>
        </Card>
        <Card
          subtitle="2. Request Tender"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
          isHoverable
        >
          <div>
            <p style={{ fontSize: 16 }}>
              A formal, structured procedure for generating competing offers
              from different potential suppliers or contractors looking to
              obtain an award of business activity in works, supply.
            </p>
          </div>
        </Card>
        <Card
          subtitle="3. Price Rate"
          className="buyer--card"
          styles={{ margin: '0.5rem 0' }}
          isHoverable
        >
          <div>
            <p style={{ fontSize: 16 }}>
              A formal, structured procedure for generating competing offers
              from different potential suppliers or contractors looking to
              obtain an award of business activity in works, supply.
            </p>
          </div>
        </Card>
        <CardSection
          title="Recent Tender Request"
          route="buyers/tender-requests"
          listItems={TenderRequestsData}
        />
        <CardSection
          title="Shop by Seller"
          viewAllAction={handleOpenModal}
          listItems={sellers}
        />
        <CardSection
          title="Shop By Platform"
          route="buyers/shop-by-platforms"
          listItems={platforms}
        />
      </div>
      <Modal
        title="Shop By Seller"
        centered
        visible={isModalOpen}
        okText={'Next'}
        onOk={() => {
          navigate('buyers/shop-by-sellers');
        }}
        onCancel={() => setIsModalOpen(!isModalOpen)}
      >
        <h3>Choose Variety</h3>
        <div>
          <Checkbox.Group onChange={handleVarietyChange}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {variety.map((item) => (
                <Checkbox key={item.key} value={item.name}>
                  {item.name}
                </Checkbox>
              ))}
            </div>
          </Checkbox.Group>
        </div>
      </Modal>
    </>
  );
};

export default BuyerHome;
