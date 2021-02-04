import React, { useState, useEffect } from 'react';

// Components
import { navigate, RouteComponentProps } from '@reach/router';
import Card from '../../../../components/card';
import { GetAllPlatform } from '../../../../../API';
import Notification from '../../../../components/notification';
import Platform1 from '../../../../../assets/images/slider-1.jpg';
import { Empty } from 'antd';

// placeholder data

const Platforms: React.FC<RouteComponentProps> = () => {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
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
            routes: 'platform-subscriber-list',
          };
        });
        setPlatforms(data);
      } else {
        Notification(false, 'Failed to fetch Platform');
      }
    };
    getAllPlatform();
  }, []);
  return (
    <div>
      <h1>Platforms</h1>
      <hr />
      {platforms.length !== 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', height: '700px' }}>
          {platforms.map((item: any) => (
            <Card
              key={item.id}
              imgTitle={item.title}
              imgDescrip={item.platform_region}
              img={item.img}
              styles={{ maxWidth: '300px' }}
              onClick={() =>
                navigate(`${item.routes}`, {
                  state: { data: { platformId: item.id } },
                })
              }
            />
          ))}
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
    </div>
  );
};

export default Platforms;
