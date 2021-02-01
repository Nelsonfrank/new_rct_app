import React, { useEffect, useState } from 'react';

// Component
import { Input, Select, Button, InputNumber, Divider, Radio } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GetAllVariety } from '../../../../../API';
import Notification from '../../../../components/notification';
//Styles
import './TenderBidForm.less';

// export interface TenderBidProps {}
type varietyProps = {
  key: string;
  name: string;
  platform: string;
  region: string;
  added_by: string;
}[];

const TenderBid: React.FC<RouteComponentProps> = () => {
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
    register('quantity');
    register('variety');
    register('grade');
    register('tbs_certificate');
    register('batch_number');
    register('pickup_location');
    register('description');
  }, [register]);

  const handleQuantityChange = (event: any) => {
    setValue('quantity', event);
  };

  const handleVarietyChange = (event: any) => {
    setValue('variety', event);
  };

  const handleGradeChange = (event: any) => {
    setValue('grade', event);
  };

  const handleCertifChangee = (event: any) => {
    setValue('certificate_no', event);
  };

  const handleBatchChange = (event: any) => {
    setValue('batch_no', event);
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
          <h3>Request Tender</h3>
          <Input
            size="large"
            placeholder="RICE"
            style={{ width: '100%' }}
            disabled
          />
        </div>
        <div className="Bid-quantity_input">
          <h3>Quantity Available</h3>
          <InputNumber
            size="large"
            placeholder="Quantity in Kg"
            style={{ width: '100%' }}
            onChange={handleQuantityChange}
          />
          <span style={{ fontSize: '1rem', color: 'red' }}>
            {errors.amount && 'Quantity is required'}
          </span>
        </div>
        <div className="option-select_bid">
          <h3>Variety</h3>
          <Select
            size="large"
            defaultValue="variety"
            style={{ width: '100%' }}
            onChange={handleVarietyChange}
          >
            {variety.map((item) => (
              <Select.Option key={item.key} value={item.name}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
          <span style={{ fontSize: '1rem', color: 'red' }}>
            {errors.variety && 'Variety is required'}
          </span>
        </div>
        <div>
          <h3>Is it graded?</h3>
          <Radio.Group name="radiogroup" defaultValue={false}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>

          <div className="option-select_bid">
            <Select
              size="large"
              defaultValue="grade"
              style={{ width: '100%' }}
              onClick={handleGradeChange}
            >
              <Select.Option value="grade">Select Grade</Select.Option>
              <Select.Option value="one">One</Select.Option>
              <Select.Option value="two">Two</Select.Option>
              <Select.Option value="three">Three</Select.Option>
            </Select>
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.grade && 'Grade is required'}
            </span>
          </div>
        </div>
        <div className="option-select_bid">
          <h3>Is it Batch Certified?</h3>
          <Radio.Group name="radiogroup" defaultValue={false}>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
          <div>
            <Input
              size="large"
              placeholder="Add Batch Certified Number"
              style={{ width: '100%' }}
              onChange={handleCertifChangee}
            />
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.tbs_certificate && 'TBS Certif is required'}
            </span>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <h3>Add Batch Certificate</h3>
            <Input
              type="file"
              size="large"
              placeholder="Add Batch Certified Number"
              style={{ width: '100%' }}
              onChange={handleBatchChange}
            />
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.batch_number && 'Batch Certificate is required'}
            </span>
          </div>
        </div>
        <div className="Bid-quantity_input">
          <h3>Pickup Location</h3>
          <Input
            size="large"
            placeholder="Add Pickup Location"
            style={{ width: '100%' }}
            onChange={handlePickupLocation}
          />
          <span style={{ fontSize: '1rem', color: 'red' }}>
            {errors.pickup_location && 'Pickup Location is required'}
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
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TenderBid;
