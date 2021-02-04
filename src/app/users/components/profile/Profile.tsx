import React, { useEffect } from 'react';

//Components
import { Tabs } from 'antd';
import { RouteComponentProps } from '@reach/router';
import UserInfo from './components/user-info';
import UserAvatar from './components/user-avatar';
import Avatar from '../../../../assets/images/2.png';
import ProfileMobile from './components/profile-mobile';
//Styles
import './Profile.less';

// export interface UserProfileProps {}

const { TabPane } = Tabs;
interface ProfileProps extends RouteComponentProps {
  request: string;
}
const UserProfile: React.FC<ProfileProps> = (props: any) => {
  const { request } = props;

  useEffect(() => {
    console.log(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="profile-lg-container">
        <div className="userprofile-container">
          <UserAvatar
            profileImage={Avatar}
            // recentTenders={[recentTenders[0], recentTenders[1]]}
          />
          <div className="userprofile_detailed">
            <div>
              <h1 className="username">Joseph Joel</h1>
              <p>Seller</p>
            </div>{' '}
            <div>
              <Tabs defaultActiveKey="1" size="large" style={{ fontSize: 16 }}>
                <TabPane tab="Info" key="1">
                  <UserInfo
                    type={request}
                    // tenderDetails={}
                  />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <ProfileMobile />
    </>
  );
};

export default UserProfile;
