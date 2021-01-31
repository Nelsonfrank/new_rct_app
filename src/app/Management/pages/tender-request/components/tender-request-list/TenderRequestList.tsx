/* eslint-disable react/display-name */
import React, { useState, useEffect, useContext } from 'react';

//Components
import { Table, Space, Divider, Tooltip, Tag } from 'antd';
import { EyeOutlined, StopOutlined, DeleteOutlined } from '@ant-design/icons';
import Card from '../../../../../components/card';
import { navigate, RouteComponentProps } from '@reach/router';
import Notification from '../../../../../components/notification';
import { Auth } from '../../../../../../auth/AuthContext';
// API
import { GetAllTenderRequest } from '../../../../../../API';
// Props Types
// export interface TenderRequestsListProps {}

const TenderRequestsList: React.FC<RouteComponentProps> = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [allTenderRequest, setAllTenderRequest] = useState([]);

  const { adminAccessToken } = useContext(Auth);
  useEffect(() => {
    const getAllTenderRequest = async () => {
      const response = await GetAllTenderRequest(adminAccessToken).then(
        (response) => response,
      );
      if (response.status === 200) {
        setAllTenderRequest(response.data.data.requestTenderList);
      } else {
        Notification(true, 'Failed to Fetch Tender Request', response.message);
      }
    };
    getAllTenderRequest();
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  };

  const randomColorGenenrator = () => {
    const color = ['#2db7f5', '#f50', '#2db7f5', '#9B59B6'];
    const random = Math.floor(Math.random() * color.length);
    return color[random];
  };

  const columns = [
    {
      title: 'Quantity(kgs)',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.quantity.length - b.quantity.length,
      },
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.grade.length - b.grade.length,
      },
    },
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
      title: 'Price (TZS/kg)',
      dataIndex: 'price',
      key: 'price',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.price.length - b.price.length,
      },
    },
    {
      title: 'Pickup Location',
      dataIndex: 'pickupLocation',
      key: 'pickupLocation',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) =>
          a.pickupLocation.length - b.pickupLocation.length,
      },
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => (
            <Tag color={randomColorGenenrator()} key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <Space split={<Divider type="vertical" />}>
            <div onClick={() => navigate('tender-request/view')}>
              <Tooltip title="View More">
                <EyeOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Disable Request">
                <StopOutlined style={{ fontSize: '1.25rem' }} />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Delete Request">
                <DeleteOutlined
                  style={{ fontSize: '1.25rem', color: '#ff0000' }}
                />
              </Tooltip>
            </div>
          </Space>
        </>
      ),
    },
  ];
  return (
    <Card
      title="Tender Request"
      styles={{ minHeight: '90vh', overflowY: 'auto' }}
    >
      <Divider />
      <Table
        rowSelection={rowSelection}
        dataSource={allTenderRequest}
        columns={columns}
      />
    </Card>
  );
};

export default TenderRequestsList;
