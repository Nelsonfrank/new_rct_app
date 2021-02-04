import React from 'react';

// components
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// export interface SpinnerProps {}

interface spinnerProps {
  spinning: boolean;
}
const Spinner: React.FC<spinnerProps> = (props: any) => {
  const { spinning } = props;
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return <Spin spinning={spinning} indicator={antIcon} />;
};

export default Spinner;
