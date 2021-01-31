import React, { useState, useContext, useEffect } from 'react';

// Components
import { Input } from 'antd';
import { Divider, Button, Popover } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from '@reach/router';
import { useLocation } from '@reach/router';

//Auth
import { Auth } from '../../../../../../auth/AuthContext';
// Styles
import './HeaderNavigation.less';

// Props Types
export interface HeaderNavigationProps {
  hideOptions?: boolean;
}

const { Search } = Input;

const HeaderNavigation: React.FC<HeaderNavigationProps> = (
  props: HeaderNavigationProps,
) => {
  //State
  const [isOpen, setisOpen] = useState(false);

  const location = useLocation();
  const { userAccessToken, logout } = useContext(Auth);
  const { hideOptions } = props;
  const toggleNavigationOption = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  const onSearch = (value: string) => console.log(value);

  // const DividerComponent = ()=>

  return (
    <>
      <div
        className={
          isOpen ? 'navigation--user_closed' : 'navigation--user_container'
        }
      >
        <div className="navigation--user">
          <div className="navigation--menu">
            <div className="humbergerIcon" onClick={toggleNavigationOption}>
              <MenuOutlined style={{ fontSize: 24 }} />
            </div>
            <div className="app--logo">
              <h2 style={{ marginBottom: 0 }}>RCT APP</h2>
            </div>
          </div>
          <div className="user--app">
            <div className="search--input">
              <Search
                placeholder="Search Here"
                size="large"
                onSearch={onSearch}
                allowClear
                style={{ width: '90%' }}
                enterButton
              />
            </div>
            <div className="navigation--user_action">
              {!userAccessToken ? (
                <div className="registry-container">
                  <span className="register--welcome">Welcome!</span>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to="/app/login">Login as Seller</Link>{' '}
                  </div>
                </div>
              ) : (
                <div>
                  <Popover
                    placement="bottom"
                    content={
                      <>
                        <div
                          style={{ display: 'flex', flexDirection: 'column' }}
                        >
                          <Button type="link">Profile</Button>
                          <Button type="link" onClick={logout}>
                            Logout
                          </Button>
                        </div>
                      </>
                    }
                    trigger="click"
                  >
                    <div className="profile">
                      <div className="profile--shape">
                        <p className="user--name">
                          <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 28 28"
                          >
                            <path d="M14 0c7.734 0 14 6.266 14 14 0 7.688-6.234 14-14 14-7.75 0-14-6.297-14-14 0-7.734 6.266-14 14-14zM23.672 21.109c1.453-2 2.328-4.453 2.328-7.109 0-6.609-5.391-12-12-12s-12 5.391-12 12c0 2.656 0.875 5.109 2.328 7.109 0.562-2.797 1.922-5.109 4.781-5.109 1.266 1.234 2.984 2 4.891 2s3.625-0.766 4.891-2c2.859 0 4.219 2.312 4.781 5.109zM20 11c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6z"></path>
                          </svg>
                        </p>
                      </div>
                    </div>
                  </Popover>
                </div>
              )}
            </div>
          </div>
        </div>
        <Divider
          style={{
            margin: '0  0 0.5rem 0 ',
            borderTop: '2px solid rgba(0, 0, 0, 0.06)',
          }}
        />
      </div>
      <div className={`${hideOptions ? 'option-list_hide' : 'option--group'} `}>
        {location.pathname.includes('/app/sellers') ? (
          <div className="options-lgscreen">
            <div className="option--item__lgscreen ">
              <p style={{ marginBottom: 0 }}>
                <Link to="/">Home</Link>
              </p>
            </div>
            <div className="option--item__lgscreen ">
              <p style={{ marginBottom: 0 }}>
                <Link to="tender-requests">Tender Given</Link>
              </p>
            </div>
            <div className="option--item__lgscreen ">
              <p style={{ marginBottom: 0 }}>
                <Link to="shop-by-sellers">Buyers</Link>
              </p>
            </div>
            <div className="option--item__lgscreen ">
              <p style={{ marginBottom: 0 }}>
                <Link to="market-info">Market Today</Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="options-lgscreen">
            <div className="option--item__lgscreen ">
              <p style={{ marginBottom: 0 }}>
                <Link to="/">Home</Link>
              </p>
            </div>
            <div className="option--item__lgscreen ">
              <p style={{ marginBottom: 0 }}>
                <Link to="tender-requests">Tender Request</Link>
              </p>
            </div>
            <div className="option--item__lgscreen ">
              <p style={{ marginBottom: 0 }}>
                <Link to="shop-by-sellers">Sellers</Link>
              </p>
            </div>
            <div className="option--item__lgscreen ">
              <p style={{ marginBottom: 0 }}>
                <Link to="shop-by-platforms">Platforms</Link>
              </p>
            </div>
            <div className="option--item__lgscreen ">
              <p style={{ marginBottom: 0 }}>
                <Link to="market-info">Market Today</Link>
              </p>
            </div>
          </div>
        )}
        <Divider
          style={{
            margin: '0.5rem 0 ',
            borderTop: '1px solid rgba(0, 0, 0, 0.06)',
          }}
        />
      </div>
      <div className={isOpen ? 'nav--list' : 'nav--list_closed'}>
        <div className="nav-close">
          <button
            type="button"
            style={{ backgroundColor: 'transparent', border: 'none' }}
            className="nav--close_btn"
            onClick={toggleNavigationOption}
          >
            <CloseOutlined style={{ fontSize: 28 }} />
          </button>
        </div>
        <div className="user--nav">
          <ul className="nav--option">
            <li>
              <Link to="/" className="nav--option_item">
                Home
              </Link>
            </li>
            <li onClick={toggleNavigationOption}>
              <Link to="tender-request" className="nav--option_item">
                Tender Request
              </Link>
            </li>
            <li onClick={toggleNavigationOption}>
              <Link to="shop-by-sellers" className="nav--option_item">
                Seller
              </Link>
            </li>
            <li onClick={toggleNavigationOption}>
              <Link to="shop-by-platforms" className="nav--option_item">
                Platform
              </Link>
            </li>
            <li onClick={toggleNavigationOption}>
              <Link to="market-info" className="nav--option_item">
                Market Info
              </Link>
            </li>
            <li onClick={toggleNavigationOption}>
              <a href="#" className="nav--option_item">
                My Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderNavigation;
