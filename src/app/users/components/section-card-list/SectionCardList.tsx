import React, { useContext } from 'react';

// Components
import SectionHeader from './components/section-header';
import Card from '../../../components/card';
import { Button } from 'antd';
import { navigate } from '@reach/router';
import { Empty } from 'antd';
import { Buyer } from '../../../../context/buyers/BuyerContextType';
// Styles
import './SectionCardList.less';

// Props Types
export interface SectionCardListProps {
  title: string;
  route?: string;
  users?: boolean;
  tenderRequest?: boolean;
  listItems: {
    id: number;
    img: string;
    title: string;
    cardDescrip: string;
    routes: string;
    state?: { data: { platform: string } };
  }[];
  cardStyles?: React.CSSProperties;
  viewAllAction?: () => void;
}

const SectionCardList: React.FC<SectionCardListProps> = (
  props: SectionCardListProps,
) => {
  const { title, route = '', listItems, cardStyles, viewAllAction } = props;

  const { saveSellerInfo } = useContext(Buyer);
  const handleViewAllClick = () => {
    viewAllAction ? viewAllAction() : navigate(route);
  };

  const handleSellerClick = (item: any) => {
    navigate(item.routes, { state: item.state });
    title === 'Shop by Seller' && saveSellerInfo(item, 'seller_info');
    title === 'Rice Buyers' && saveSellerInfo(item, 'seller_info');
  };
  return (
    <>
      <SectionHeader
        title={title}
        route={route}
        handleViewAllAction={viewAllAction}
      />
      {listItems.length !== 0 ? (
        <div className="card--list_group">
          {listItems.map((item) => (
            <Card
              key={item.id}
              styles={{ margin: '0 10px', ...cardStyles }}
              className="card-section_container"
              img={item.img}
              imgTitle={item.title}
              imgDescrip={item.cardDescrip}
              isHoverable
              onClick={() => handleSellerClick(item)}
            ></Card>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Empty />
        </div>
      )}
      <div className="SeeAll-Btn-sm">
        <Button
          type="primary"
          shape="round"
          size="large"
          onClick={handleViewAllClick}
        >
          See All
        </Button>
      </div>
    </>
  );
};

export default SectionCardList;
