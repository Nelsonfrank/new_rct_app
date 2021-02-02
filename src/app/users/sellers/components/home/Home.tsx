import React, { useEffect, useState, useContext } from 'react';

// Components
import Header from '../../../components/header';
import CardSection from '../../../components/section-card-list';
import Card from '../../../../components/card';
import { RouteComponentProps } from '@reach/router';
import { Auth } from '../../../../../auth/AuthContext';
import { GetAllBuyers } from '../../../../../API';
import Notification from '../../../../components/notification';
import User1 from '../../../../../assets/images/10.jpg';
// placeholder data
import { TenderBidsData } from './SellerSectionData';
//Styles
import './Home.less';

// export interface HomeProps {}

const Home: React.FC<RouteComponentProps> = () => {
  const [buyers, setBuyers] = useState([]);

  const { userAccessToken } = useContext(Auth);

  useEffect(() => {
    const getAllBuyer = async () => {
      const response = await GetAllBuyers(userAccessToken).then(
        (response) => response,
      );
      console.log(response);
      if (response.status === 200) {
        const data = response.data.data
          .map((data: any) => {
            return {
              id: data.id,
              img: User1,
              title: data.name,
              cardDescrip: data.countryName,
              routes: 'sellers/profile',
              state: { data: { platformId: data.id } },
            };
          })
          .filter((item: any) => {
            return item.title !== null;
          });
        // console.log(data);
        const input = data.slice(0, 4);

        setBuyers(input);
      } else {
        Notification(false, 'Failed to Fetch Buyer', response.message);
      }
    };
    getAllBuyer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header />
      <div className="seller--card_group">
        <Card
          subtitle="1. Give Tender"
          className="seller--card"
          styles={{ margin: '0.5rem 0' }}
          isHoverable
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              recusandae earum sequi vero blanditiis aliquid impedit eos aut vel
              reprehenderit velit sunt natus voluptates iure, facere neque nemo
              non culpa.
            </p>
          </div>
        </Card>
        <Card
          subtitle="2. Request Tender "
          className="seller--card"
          styles={{ margin: '0.5rem 0' }}
          isHoverable
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              recusandae earum sequi vero blanditiis aliquid impedit eos aut vel
              reprehenderit velit sunt natus voluptates iure, facere neque nemo
              non culpa.
            </p>
          </div>
        </Card>
        <Card
          subtitle="3. Price Rate"
          className="seller--card"
          styles={{ margin: '0.5rem 0' }}
          isHoverable
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              recusandae earum sequi vero blanditiis aliquid impedit eos aut vel
              reprehenderit velit sunt natus voluptates iure, facere neque nemo
              non culpa.
            </p>
          </div>
        </Card>
        <CardSection
          title="Recent Tender Given"
          route="sellers/tender-bids"
          listItems={TenderBidsData}
          users
        />
        <CardSection
          title="Rice Buyers"
          route="sellers/buyers-list"
          listItems={buyers}
          users
        />
      </div>
    </>
  );
};

export default Home;
