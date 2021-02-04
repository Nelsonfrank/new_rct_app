import React, { useEffect, useState } from 'react';

// Component
import { Input, Select, Button, Divider, Radio } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GetAllVariety } from '../../../../../API';
import Notification from '../../../../components/notification';
//Styles
import './QuoteForm.less';

// export interface TenderBidProps {}
type varietyProps = {
  key: string;
  name: string;
  platform: string;
  region: string;
  added_by: string;
}[];

const QuoteForm: React.FC<RouteComponentProps> = () => {
  const [variety, setVariety] = useState<varietyProps>([]);

  const { register, handleSubmit, setValue, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    const getAllVariety = async () => {
      const varietyResponse = await GetAllVariety().then(
        (response) => response,
      );

      if (varietyResponse.status === 200) {
        const data = varietyResponse.data.data.map((item: any) => {
          return {
            key: item.id,
            name: item.variety_name,
          };
        });
        setVariety(data);
      } else {
        Notification(false, 'Fail to Fetch Variety');
      }
    };
    getAllVariety();
  }, []);
  useEffect(() => {
    register('quantity', { required: true });
    register('variety');
    register('grade');
    register('price', { required: true });
    register('pickup_location', { required: true });
    register('description');
  }, [register]);

  const handleAmountChange = (event: any) => {
    setValue('quantity', event.target.value);
  };

  const handleSellingPricefChangee = (event: any) => {
    setValue('price', event.target.value);
  };
  const handlePickupLocation = (event: any) => {
    setValue('pickup_location', event);
  };

  const handleDetailsChange = (event: any) => {
    setValue('description', event);
  };

  type FormValues = {
    quantity: string;
    variety: string;
    grade: string;
    certificate_no: string;
    batch_no: string;
    pickup_location: string;
    description: string;
  };
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <Divider
          style={{
            margin: '0  0 0.5rem 0 ',
            borderTop: '2px solid rgba(0, 0, 0, 0.06)',
          }}
        />
      </div>
      <form className="tenderBid_container" onSubmit={handleSubmit(onSubmit)}>
        <div className="Bid-quantity_input">
          <h3>Tender Details</h3>
          <Input
            size="large"
            placeholder="RICE"
            style={{ width: '100%' }}
            disabled
          />
        </div>
        <div className="Bid-quantity_input">
          <h3>Quantity Needed</h3>
          <Input
            size="large"
            placeholder="Quantity in Kg"
            style={{ width: '100%' }}
            disabled
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Input
            size="large"
            placeholder="Grade"
            style={{ width: '48%' }}
            disabled
          />

          <Input
            size="large"
            placeholder="Variety"
            style={{ width: '48%' }}
            disabled
          />
        </div>
        <Divider />
        <div className="option-select_bid">
          <h3>Quote Details</h3>

          <div className="option-select_bid">
            <Input
              size="large"
              placeholder="Add Amount you Can Supply"
              style={{ width: '100%' }}
              onChange={handleAmountChange}
            />
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.quantity && 'Quantity is required'}
            </span>
          </div>

          <div className="option-select_bid">
            <Input
              size="large"
              placeholder="Add Selling Price @Kg"
              style={{ width: '100%' }}
              onChange={handleSellingPricefChangee}
            />
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.price && 'Price is required'}
            </span>
          </div>
          <div className="Bid-quantity_input">
            <Input
              size="large"
              placeholder="Add Pickup Location"
              style={{ width: '100%' }}
              onChange={handlePickupLocation}
            />
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.pickup_location && 'Location is required'}
            </span>
          </div>

          <div className="Bid-textarea">
            <Input.TextArea
              placeholder="Other Necessary Details"
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange={handleDetailsChange}
            />
          </div>
          <div className="Bid-action_btn">
            <Button size="large" type="primary" htmlType="submit">
              Submit Quote
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
