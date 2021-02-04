// dependencies
import React from 'react';
import { Button } from 'antd';
import { navigate } from '@reach/router';
import { ArrowLeftOutlined } from '@ant-design/icons';

// Props Types
interface backButtonProps {
  style?: React.CSSProperties;
}

const BackButton: React.FC<backButtonProps> = (props: any) => {
  const { style } = props;
  return (
    <>
      <div>
        <div style={{ marginLeft: '-5rem', marginTop: '1rem', ...style }}>
          <Button type="text" onClick={() => navigate(-1)}>
            <ArrowLeftOutlined
              style={{ fontSize: '1.875rem', fontWeight: 600 }}
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default BackButton;
