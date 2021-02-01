/* eslint-disable no-constant-condition */
import React from 'react';

//Components
import { Button, Tag } from 'antd';
import SectionCard from '../../../section-card-list';
import { navigate } from '@reach/router';

// placeholder data
import { ShopByBuyerData } from '../../ProfileData';

export interface UserInfoProps {
  type?: string;
}

const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {
  const { type } = props;

  return (
    <div>
      <div style={{ width: '80%' }}>
        <div style={{ marginBottom: '1.25rem', marginTop: '1.25rem' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Contact Person:
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex' }}>
              <h3>Phone Number: </h3>
              <p
                style={{
                  fontSize: 16,
                  marginLeft: '1rem',
                  textAlign: 'center',
                }}
              >
                {'0784490987'}
              </p>
            </div>

            <div style={{ display: 'flex' }}>
              <h3>Scale Status: </h3>
              <p
                style={{
                  fontSize: 16,
                  marginLeft: '1rem',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                }}
              >
                {'large'}
              </p>
            </div>

            <div style={{ display: 'flex' }}>
              <h3>Experience: </h3>
              <p
                style={{
                  fontSize: 16,
                  marginLeft: '1rem',
                  textAlign: 'center',
                }}
              >
                11-20 years in rice business
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '1.25rem' }}>
          <div
            style={{
              marginBottom: '1.25rem',
              marginTop: '1.25rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Label:
                </h3>
                <div style={{ display: 'flex' }}>
                  <Tag
                    color="#f50"
                    style={{ padding: '0.2rem 0.5rem', fontSize: '14px' }}
                  >
                    {'TBS CERTIFIED'}
                  </Tag>
                </div>
              </div>
            </div>

            <hr />
          </div>
          {/* <div>{true ? <AvailableStock /> : <StockRequired />}</div> */}
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Action</h3>
            <Button
              type="primary"
              onClick={() => navigate('tender-request-form')}
            >
              {type === 'quote_tender' ? 'Send Quote' : 'Chat'}
            </Button>
          </div>
        </div>
        <div style={{ marginTop: '4rem' }}>
          <SectionCard
            title="Related Sellers"
            route="/"
            listItems={ShopByBuyerData}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
