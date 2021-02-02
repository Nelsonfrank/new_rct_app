/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// Components
import { Input, Button, Divider } from 'antd';
import { RouteComponentProps, Link, navigate } from '@reach/router';
import Notification from '../notification';
// Api
import { CompleteRegistration } from '../../../API';
//Styles
import './Signup.less';

// Props type
// export interface SignupProps {}

const Signup: React.FC<RouteComponentProps> = (props: any) => {
  const { register, handleSubmit, setValue, getValues, errors } = useForm();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const phoneDetail = props.location.state.data;
    setValue('dial_code', props.location.state.data.dial_code);
    setValue('phone_number', props.location.state.data.phone_number);
    console.log(phoneDetail);
  }, []);

  useEffect(() => {
    register('first_name', { required: true });
    register('last_name', { required: true });
    register('dial_code');
    register('phone_number');
  }, [register]);

  const handleFirstNameChange = (event: any) => {
    setValue('first_name', event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setValue('last_name', event.target.value);
  };

  type FormValues = {
    dial_code: string;
    phone_number: string;
    first_name: string;
    last_name: string;
  };
  const onSubmit: SubmitHandler<FormValues> = (data: any) => {
    const payload = {
      dial_code: data.dial_code,
      phone_number: data.phone_number,
      name: `${data.first_name} ${data.last_name}`,
    };
    console.log(payload);
    setLoading(true);
    const completeUserRegistration = async () => {
      const updateResponse = await CompleteRegistration(payload)
        .then((response) => response)
        .catch((error) => error);
      setLoading(false);

      if (updateResponse.status === 200) {
        Notification(true, 'Account Update Successfully');
        const phoneInfo = {
          dial_code: props.location.state.data.dial_code,
          phone_number: props.location.state.data.phone_number,
          checkBuyer: props.location.state.data.checkBuyer,
        };
        navigate('/app/verify-phone', { state: { data: phoneInfo } });
      } else {
        Notification(false, 'Account Update Failed');
      }
    };

    completeUserRegistration();
  };

  return (
    <div>
      <div className="signup_container">
        <div className="signup_innerContainer">
          <div className="signup_inner">
            <div className="signup_header">
              <h2>Sign Up</h2>
              <Divider
                style={{
                  margin: '0  0 0.5rem 0 ',
                  borderTop: '2px solid rgba(0, 0, 0, 0.06)',
                }}
              />
            </div>
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
              <div className="signup_username">
                <div className="signup_names">
                  <Input
                    placeholder="First Name"
                    size="large"
                    onChange={handleFirstNameChange}
                  />
                  <span style={{ fontSize: '1rem', color: 'red' }}>
                    {errors.first_name && 'First name is required'}
                  </span>
                </div>
                <div className="signup_names">
                  <Input
                    placeholder="Last Name"
                    size="large"
                    onChange={handleLastNameChange}
                  />
                  <span style={{ fontSize: '1rem', color: 'red' }}>
                    {errors.last_name && 'Last name is required'}
                  </span>
                </div>
              </div>
              <div className="signup_phoneNo">
                <Input
                  placeholder="Phone Number"
                  size="large"
                  style={{ width: '100%' }}
                  value={props.location.state.data.phone_number}
                  maxLength={9}
                  addonBefore={getValues('dial_code') || '+255'}
                />
              </div>
              <div className="signup_btn">
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={loading}
                >
                  {' '}
                  SignUp
                </Button>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ marginTop: 10 }}>
                  <p>
                    Update Phone Number?!.{' '}
                    <Link to="/app/login"> Click Here</Link>
                  </p>
                </div>
                <div>
                  <Link to="/">
                    <p>Go Home</p>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
