import React, { useContext } from 'react';

//Components
import { RightOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
// Styles
import './ListItem.less';
import { navigate } from '@reach/router';
import { Auth } from '../../../../../../auth/AuthContext';
export interface ListItemProps {
  id: number;
  image: string;
  type: string;
  ownerName: string;
  description: string;
  variety?: string;
  grade?: string;
  pickupLocation?: string;
  stock?: string;
  need?: string;
  profileRoute?: string;
  isAllChecked: boolean;
  category?: string;
  user_location?: string;
  platformLeader?: string;
  phone_number?: string;
  platform_name?: string;
  addCheckedItem: (value: { ownerName: string; id: number }) => void;
  removeCheckedItem: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const {
    id,
    image,
    ownerName,
    description,
    type,
    variety,
    grade,
    pickupLocation,
    stock,
    need,
    isAllChecked,
    addCheckedItem,
    removeCheckedItem,
    category,
    user_location,
    platformLeader,
    phone_number,
    platform_name,
  } = props;

  const { userInfo } = useContext(Auth);

  React.useEffect(() => {
    isAllChecked ? setIsChecked(true) : setIsChecked(false);
  }, [isAllChecked]);

  const [isChecked, setIsChecked] = React.useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
    isChecked ? removeCheckedItem(id) : addCheckedItem({ ownerName, id });
  };

  const giveTender = (route: string, item: any) => {
    if (type === 'Give Tender') {
      if (userInfo && userInfo.phone_number) {
        navigate(route);
      } else {
        navigate('/app/login', { state: { data: 'buyer redirected' } });
        const destinationRoute = {
          currentRoute: '/app/buyers',
          togoRoute: 'give-tender-form',
          userInfo: userInfo,
        };
        sessionStorage.setItem(
          'destinationRoute',
          JSON.stringify(destinationRoute),
        );
      }
    } else {
      navigate(route);
    }
    sessionStorage.setItem('selectedItems', JSON.stringify(item));
  };

  const handleMoreDetails = (item: any) => {
    type === 'request-tender'
      ? giveTender('request-tender-form', item)
      : type === 'Send Quote'
      ? giveTender('quote-form', item)
      : type === 'Give Tender'
      ? giveTender('give-tender-form', item)
      : type === 'Chat'
      ? giveTender('chats', item)
      : navigate('profile');
  };
  return (
    <>
      <Checkbox
        key={id}
        checked={isChecked}
        value={id}
        style={{ display: 'flex', margin: '1rem 0.125rem', width: '100%' }}
        onChange={toggleCheckBox}
      >
        <div className="listItemContainer">
          <div className="listitemImageContainer">
            <img src={image} alt="cover image" className="listitemImage" />
          </div>
          <div className="listDetailsContainer">
            <div className="listDetails">
              <h3 className="listDetailsHeader" style={{ margin: '0rem' }}>
                {ownerName}
              </h3>
              {/* <div className="more">
                <p className="listDetailsParag listDetailsParagBold pickup_location">
                  <span style={{ fontWeight: 600, marginRight: 2 }}>
                    Phone Number:{' '}
                  </span>{' '}
                  {phone_number}
                </p>
                <p className="listDetailsParag listDetailsParagBold pickup_location">
                  <span style={{ fontWeight: 600, marginRight: 2 }}>
                    Platform Name:{' '}
                  </span>{' '}
                  {platform_name}
                </p>
              </div> */}

              <p className="listDetailsParag dispay-parag">{description}</p>
              <div className="listOptions"></div>
              <div className="listOptions">
                <div className="listOptions_items">
                  {variety ? (
                    <p className="listDetailsParag listDetailsParagBold">
                      {' '}
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Variety:{' '}
                      </span>
                      {variety}
                    </p>
                  ) : null}
                  {grade ? (
                    <p className="listDetailsParag listDetailsParagBold dispay-item">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Grade:{' '}
                      </span>{' '}
                      {grade}
                    </p>
                  ) : null}
                  {stock ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Stock:{' '}
                      </span>{' '}
                      {stock}
                    </p>
                  ) : null}
                  {pickupLocation ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Pickup Location:{' '}
                      </span>{' '}
                      {pickupLocation}
                    </p>
                  ) : null}
                  {need ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Buyers Need:{' '}
                      </span>{' '}
                      {need}
                    </p>
                  ) : null}
                  {category ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Category:{' '}
                      </span>{' '}
                      {category}
                    </p>
                  ) : null}
                  {user_location ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Location:{' '}
                      </span>{' '}
                      {user_location}
                    </p>
                  ) : null}
                  {phone_number ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Phone Number:{' '}
                      </span>{' '}
                      {phone_number}
                    </p>
                  ) : null}
                  {platform_name ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Platform Name:{' '}
                      </span>{' '}
                      {platform_name}
                    </p>
                  ) : null}
                  {platformLeader ? (
                    <p className="listDetailsParag listDetailsParagBold pickup_location">
                      <span style={{ fontWeight: 600, marginRight: 2 }}>
                        Platform Leader:{' '}
                      </span>{' '}
                      {platformLeader}
                    </p>
                  ) : null}
                </div>
                <div className="moreDetailsBtn">
                  {type === 'request-tender' ? (
                    <Button
                      type="primary"
                      onClick={() => handleMoreDetails(props)}
                    >
                      Request Tender
                    </Button>
                  ) : type === 'Send Quote' ? (
                    <>
                      <Button
                        type="primary"
                        onClick={() => handleMoreDetails(props)}
                      >
                        Send Quote
                      </Button>
                      <Button
                        danger
                        style={{ marginLeft: '10px' }}
                        onClick={() => handleMoreDetails(props)}
                      >
                        Quit Tender
                      </Button>
                    </>
                  ) : type === 'Chat with Seller' ? (
                    <Button
                      type="primary"
                      onClick={() => handleMoreDetails(props)}
                    >
                      Chat
                    </Button>
                  ) : type === 'Give Tender' ? (
                    <Button
                      type="primary"
                      onClick={() => handleMoreDetails(props)}
                    >
                      Give Tender
                    </Button>
                  ) : null}
                  {/* <Button
                    type="primary"
                    style={{ marginLeft: '10px' }}
                    onClick={()=>handleMoreDetails(props)}
                  >
                    More Details
                  </Button> */}
                </div>
              </div>
            </div>
            <div
              className="listItemIconBtn"
              onClick={() => handleMoreDetails(props)}
            >
              <RightOutlined className="listItemIcon" />
            </div>
          </div>
        </div>
      </Checkbox>
      <hr />
    </>
  );
};

export default ListItem;
