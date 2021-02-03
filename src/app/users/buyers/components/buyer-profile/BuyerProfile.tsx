import React, { useEffect, useState } from 'react';
//dependencies
import Profile from '../../../components/profile';
import { RouteComponentProps } from '@reach/router';
// export interface SellerProfileProps {}

const BuyerProfile: React.FC<RouteComponentProps> = (props: any) => {
  const [request, setRequest] = useState('');

  useEffect(() => {
    setRequest(props.location.state.data);
  }, [props.location.state.data]);
  return (
    <>
      <Profile request={request} />
    </>
  );
};

export default BuyerProfile;
