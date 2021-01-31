// dependencies
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import Card from '../../../../../components/card';
import { GetPriceRate } from '../../../../../../API';
import Notification from '../../../../../components/notification';
export interface PriceRateProps {
  style?: React.CSSProperties;
}

const PriceRate: React.FC<PriceRateProps> = (props: PriceRateProps) => {
  const { style } = props;
  const [priceRate, setPriceRate] = useState([]);

  useEffect(() => {
    const fetchPriceRate = async () => {
      const response = await GetPriceRate().then((response) => response);
      if (response.status === 200) {
        const data = response.data.data.map((item: any) => {
          return {
            key: item.id,
            variety: item.variety,
            price: item.price_rate,
            region: item.region,
            effectiveDate: item.date,
          };
        });
        setPriceRate(data);
      } else {
        Notification(false, 'Fail to fetch Price Rate', response.message);
      }
    };
    fetchPriceRate();
  }, []);

  const columns = [
    {
      title: 'S/N',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Variety',
      dataIndex: 'variety',
      key: 'variety',
    },
    {
      title: 'Price (TZS)',
      dataIndex: 'price',
      key: 'price',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.price - b.price,
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
      title: 'Effective Date',
      dataIndex: 'effectiveDate',
      key: 'effectiveDate',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.effectiveDate.length - b.effectiveDate.length,
      },
    },
  ];
  return (
    <Card
      styles={{ ...style, overflowY: 'auto' }}
      actionBtn="View More"
      actionBtnRoute="price-rate"
    >
      <div>
        <div>
          <h2>Today Price Rate(Tzs/Kg)</h2>
        </div>
        <Table dataSource={priceRate} columns={columns} pagination={false} />
      </div>
    </Card>
  );
};

export default PriceRate;
