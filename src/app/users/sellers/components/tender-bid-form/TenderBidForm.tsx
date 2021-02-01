import React, { useEffect, useState } from 'react';

// Component
import {
  Input,
  Select,
  Button,
  InputNumber,
  Divider,
  Radio,
  Upload,
} from 'antd';
import { RouteComponentProps } from '@reach/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UploadOutlined } from '@ant-design/icons';
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
  const [TBSFileList, setTBSFileState] = useState<any>([]);

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
    register('batch_img');
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
    setValue('certificate_no', event.target.value);
  };

  const handlePickupLocation = (event: any) => {
    setValue('pickup_location', event.target.value);
  };

  const handleDetailsChange = (event: any) => {
    setValue('description', event.target.value);
  };
  const BatchUploadProps = {
    name: 'file',
    onRemove: (file: any) => {
      const index = TBSFileList.indexOf(file);
      const newFileList = TBSFileList.slice();
      newFileList.splice(index, 1);
      setTBSFileState(newFileList);
    },
    beforeUpload: (file: any) => {
      setTBSFileState([...TBSFileList, file]);
      return false;
    },
    TBSFileList,
  };

  const handleBatchImageChange = (event: any) => {
    console.log(event);
    const file = event.file;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setValue('batch_img', e.target.result);
    };
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
    } else {
      console.log(file.type);
    }
  };

  const openCoverFile = () => {
    document.querySelectorAll('input')[0].click();
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
            placeholder="variety"
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
              placeholder="grade"
              style={{ width: '100%' }}
              onClick={handleGradeChange}
            >
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
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
            <Upload
              {...BatchUploadProps}
              listType="picture"
              style={{ width: '100%' }}
              onChange={handleBatchImageChange}
            >
              <Button
                icon={<UploadOutlined />}
                size="large"
                onClick={openCoverFile}
              >
                Batch Certificate
              </Button>
            </Upload>
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
