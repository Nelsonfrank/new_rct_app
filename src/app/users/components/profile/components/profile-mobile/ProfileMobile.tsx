import React from 'react';

import Avatar from '../../../../../../assets/images/2.png';
import Card from '../../../../../components/card';

import { Tag, Button } from 'antd';

// export interface ProfileMobileProps {}

const ProfileMobile: React.FC = () => {
  return (
    <div className="profile-sm-container">
      <div>
        <div>
          <div className="profile-sm-image_container">
            <div
              style={{
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={Avatar}
                alt="profile-image"
                className="profile-sm-image"
              />
            </div>
            <h1 className="profile-user-name">Jack Dorsey</h1>
          </div>
          <div className="profile-sm-info">
            <h2>
              <span style={{ fontWeight: 500 }}>Experience:</span> 11-20 years
            </h2>
            <h2>
              <span style={{ fontWeight: 500 }}>Scale Status:</span> Large
            </h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* <h2>
            <span style={{ fontWeight: 500 }}>Tags</span>
          </h2> */}
              <div className="profile-sm-tags">
                <div>
                  <Tag
                    color="#f50"
                    style={{ padding: '0.2rem 0.5rem', fontSize: '14px' }}
                  >
                    RCT Approved
                  </Tag>
                </div>
                <div>
                  <Tag
                    color="#2db7f5"
                    style={{ padding: '0.2rem 0.5rem', fontSize: '14px' }}
                  >
                    TBS Certicified
                  </Tag>
                </div>
                <div>
                  <Tag
                    color="#87d068"
                    style={{ padding: '0.2rem 0.5rem', fontSize: '14px' }}
                  >
                    Individual
                  </Tag>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div style={{ marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.135rem', fontWeight: 600 }}>
              Tender Details
            </h2>
            <div>
              <p>
                <span style={{ fontWeight: 500 }}>Variety: </span> Kyela
              </p>
              <p>
                <span style={{ fontWeight: 500 }}>Grade: </span> 1
              </p>
              <p>
                <span style={{ fontWeight: 500 }}>Stock: </span> 10 Tonnes
              </p>
              <p>
                <span style={{ fontWeight: 500 }}>Request: </span> 200 Tonnes
              </p>
              <p>
                <span style={{ fontWeight: 500 }}>Location: </span> Morogoro
              </p>
              <p>
                <span style={{ fontWeight: 500 }}>Pickup Location: </span> Mbeya
              </p>
              <div>
                <p style={{ fontWeight: 500, marginBottom: '0px' }}>
                  Description:{' '}
                </p>{' '}
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, possimus! Hic quos ipsum a eligendi illo id
                  laboriosam ratione culpa ipsam dignissimos error, architecto
                  alias eveniet dolore officia quas cumque.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
            }}
          >
            <Button
              type="primary"
              size="large"
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                padding: '1.75rem 1.2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Give Tender
            </Button>
          </div>
        </div>
        <div style={{ marginTop: '1.23rem' }}>
          <h2 style={{ fontSize: '1.23rem' }}>Related Seller</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <Card
                img={Avatar}
                imgTitle="Mr.Alfred John"
                imgDescrip="Some description goes here"
                styles={{ maxWidth: '300px' }}
              />
            </div>
            <div>
              <Card
                img={Avatar}
                imgTitle="Mr.Alfred John"
                imgDescrip="Some description goes here"
                styles={{ maxWidth: '300px' }}
              />
            </div>
            <div>
              <Card
                img={Avatar}
                imgTitle="Mr.Alfred John"
                imgDescrip="Some description goes here"
                styles={{ maxWidth: '300px' }}
              />
            </div>
          </div>
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              type="primary"
              shape="round"
              size="large"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.125rem',
                fontWeight: 600,
              }}
            >
              See More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMobile;
