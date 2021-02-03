import React, { useEffect } from 'react';
// Components
import List from '../../../components/list';
import { RouteComponentProps } from '@reach/router';

import { GetSellersByVariety } from '../../../../../API';

// placeholder data
import { ListDataPlaceholder } from './UserInfoData';

// export interface UserListProps {}

const UserList: React.FC<RouteComponentProps> = (props: any) => {
  useEffect(() => {
    const payload = {
      variety_selection: {
        ids: props.location.state.data.selectedVariety,
      },
    };
    console.log(props.location.state.data.selectedVariety);
    console.log(payload);
    const getSellerByVariety = async () => {
      const response = await GetSellersByVariety(payload).then(
        (response) => response,
      );
      console.log(response);
    };
    getSellerByVariety();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <List
        btnTitle="Give Tender"
        routes="tender-request-form"
        itemData={ListDataPlaceholder}
      />
    </div>
  );
};

export default UserList;
