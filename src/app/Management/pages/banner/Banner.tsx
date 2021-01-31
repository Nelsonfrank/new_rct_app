import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Button, Divider } from 'antd';

//components
import Card from '../../../components/card';
// export interface BannersProps {}

const Banners: React.FC<RouteComponentProps> = () => {
  return (
    <Card title="Banners" styles={{ minHeight: '90vh', overflowY: 'auto' }}>
      <Divider />
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}
      >
        <Button type="ghost"> Edit</Button>
      </div>
      <p>Banner goes here!!!...</p>
    </Card>
  );
};

export default Banners;
