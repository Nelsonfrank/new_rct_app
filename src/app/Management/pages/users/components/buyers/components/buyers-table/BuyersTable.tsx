/* eslint-disable react/display-name */
import React, { useState, useEffect, useContext } from 'react';

//Components
import { Table, Space, Divider, Tooltip } from 'antd';
import { StopOutlined, DeleteOutlined } from '@ant-design/icons';
import Notification from '../../../../../../../components/notification';

// API
import { GetAllBuyers } from '../../../../../../../../API';
import { Auth } from '../../../../../../../../auth/AuthContext';
// Props Types
// export interface BuyersTableProps {}

const BuyersTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [toggleDisable, setToggleDisable] = useState(false);
  const [buyers, setBuyers] = useState([]);
  const { adminAccessToken } = useContext(Auth);
  useEffect(() => {
    const getAllBuyer = async () => {
      const response = await GetAllBuyers(adminAccessToken).then(
        (response) => response,
      );
      console.log(response);
      if (response.status === 200) {
        const data = response.data.data.map((data: any) => {
          return {
            firstName: data.name && data.name.split(' ')[0],
            lastName: data.name && data.name.split(' ')[1],
            phoneNumber: `0${data.phone_number}`,
            country: data.countryName,
          };
        });
        // console.log(data);
        setBuyers(data);
      } else {
        Notification(false, 'Failed to Fetch Buyer', response.message);
      }
    };
    getAllBuyer();
  }, [adminAccessToken]);

  const handleSelectChange = (selectedRowKeys: any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: handleSelectChange,
  };

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.firstName.length - b.firstName.length,
      },
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.lastName.length - b.lastName.length,
      },
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sorter: {
        // eslint-disable-next-line
        compare: (a: any, b: any) => a.country.length - b.country.length,
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <Space split={<Divider type="vertical" />}>
            <div onClick={() => setToggleDisable(!toggleDisable)}>
              <Tooltip title="Disable Buyer">
                <StopOutlined
                  style={{ fontSize: '1.25rem' }}
                  disabled={toggleDisable}
                />
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Delete Buyer" color={'red'}>
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
    <Table rowSelection={rowSelection} dataSource={buyers} columns={columns} />
  );
};

export default BuyersTable;
