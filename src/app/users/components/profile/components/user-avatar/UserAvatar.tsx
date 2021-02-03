import React from 'react';

export interface UserAvatarProps {
  profileImage: string;
  // recentTenders: {
  //   id: number;
  //   tenderImg: string;
  //   title: string;
  //   descript: string;
  // }[];
}

const UserAvatar: React.FC<UserAvatarProps> = (props: UserAvatarProps) => {
  const { profileImage } = props;
  return (
    <div className="profile-sidebar">
      <div className="profile-image_container">
        <img
          src={profileImage}
          alt="user profile picture"
          className="profile-picture"
        />
      </div>
    </div>
  );
};

export default UserAvatar;
