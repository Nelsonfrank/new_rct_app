import React, { useEffect, useState } from 'react';

// Component
import { Input, Select, Button } from 'antd';
import { RouteComponentProps } from '@reach/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import Notification from '../../../../components/notification';
// API
import { GetAllVariety, GiveTender } from '../../../../../API';
//Styles
import './TenderRequestForm.less';
// export interface TenderRequestProps {}
type varietyProps = {
  key: string;
  name: string;
  platform: string;
  region: string;
  added_by: string;
}[];
const TenderRequest: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit, setValue, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const { Option } = Select;

  const [loading, setLoading] = useState(false);
  const [variety, setVariety] = useState<varietyProps>([]);

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
        // console.log(data);
      } else {
        Notification(false, 'Fail to Fetch Variety');
      }
    };
    getAllVariety();
  }, []);

  useEffect(() => {
    register('amount', { required: true });
    register('grade', { required: true });
    register('variety', { required: true });
    register('description');
  }, [register]);

  type FormValues = {
    variety_name: string;
  };
  const handleQuantityChange = (event: any) => {
    setValue('amount', event.target.value);
  };

  const handleGradeChange = (event: any) => {
    setValue('grade', event);
  };

  const handleVarietyChange = (event: any) => {
    setValue('variety', event);
  };

  const handleDescriptionChange = (event: any) => {
    setValue('description', event.target.value);
  };
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    const selectedSellers = JSON.parse(
      sessionStorage.getItem('selectedItems') || '[]',
    );

    const sellersId = selectedSellers.map((item: any) => {
      return {
        id: item.id,
      };
    });
    const payload = {
      quantity: data.amount,
      grade: data.grade,
      pickup_location: data.description,
      variety: data.variety,
      seller_selection: {
        seller_id: sellersId,
      },
    };
    console.log(payload);
  };
  return (
    <div>
      <h3>Give Tender</h3>
      <form
        className="tenderrequest_container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="request-quantity_input">
          <Input
            size="large"
            placeholder="RICE"
            style={{ width: '100%' }}
            disabled
          />
        </div>
        <div className="request-quantity_input">
          <h3>Quantity Needed</h3>
          <Input
            size="large"
            placeholder="Quantity in Kg"
            style={{ width: '100%' }}
            addonAfter="Kgs"
            onChange={handleQuantityChange}
          />
          <span style={{ fontSize: '1rem', color: 'red' }}>
            {errors.amount && 'Amount is required'}
          </span>
        </div>
        <div className="select-option">
          <div className="option-select">
            <Select
              size="large"
              style={{ width: '100%' }}
              defaultValue={''}
              onChange={handleGradeChange}
            >
              <Option value="">Select Grade</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.grade && 'Grade is required'}
            </span>
          </div>
          <div className="option-select">
            <Select
              size="large"
              defaultValue="variety"
              style={{ width: '100%' }}
              onChange={handleVarietyChange}
            >
              <Option value="variety">Select Variety</Option>
              {variety.map((item) => (
                <Option key={item.key} value={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <span style={{ fontSize: '1rem', color: 'red' }}>
              {errors.variety && 'Variety is required'}
            </span>
          </div>
        </div>
        <div className="request-textarea">
          <Input.TextArea
            placeholder="Other Necessary Details"
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="request-action_btn">
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Give Tender
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TenderRequest;
