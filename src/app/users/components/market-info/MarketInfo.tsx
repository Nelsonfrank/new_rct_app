// dependencies
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { GetPriceRate } from '../../../../API';
import moment from 'moment';
import Notification from '../../../components/notification';

const columns = [
  {
    title: 'Variety',
    dataIndex: 'variety',
    key: 'variety',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.variety.length - b.variety.length,
    },
  },
  {
    title: 'Price (TZS)',
    dataIndex: 'price',
    key: 'price',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.price.length - b.price.length,
    },
  },
  {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) => a.region.length - b.region.length,
    },
  },
  {
    title: 'Effect Date',
    dataIndex: 'effectiveDate',
    key: 'effectiveDate',
    sorter: {
      // eslint-disable-next-line
      compare: (a: any, b: any) =>
        a.effectiveDate.length - b.effectiveDate.length,
    },
  },
];
// export interface MarketInfoProps {}

type priceRateProps = {
  key: string;
  variety: string;
  price: string;
  region: string;
  effectiveDate: string;
}[];

const MarketInfo: React.FC<RouteComponentProps> = () => {
  const [priceRate, setPriceRate] = useState<priceRateProps>([]);

  useEffect(() => {
    const getPriceRate = async () => {
      const priceRateResponse = await GetPriceRate().then(
        (response) => response,
      );

      if (priceRateResponse.status === 200) {
        const data = priceRateResponse.data.data.map((item: any) => {
          return {
            key: item.id,
            variety: item.variety,
            price: item.price_rate,
            region: item.region,
            effectiveDate: moment(item.date).format('Do MMMM YYYY'),
          };
        });
        setPriceRate(data);
        // console.log(data);
      } else {
        Notification(
          false,
          'Fail to fetch Price Rate',
          priceRateResponse.message,
        );
      }
    };
    getPriceRate();
  }, []);
  return (
    <>
      <div style={{ height: '700px' }}>
        <Table dataSource={priceRate} columns={columns} />
      </div>
    </>
  );
};

export default MarketInfo;
