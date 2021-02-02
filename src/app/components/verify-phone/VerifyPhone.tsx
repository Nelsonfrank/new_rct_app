/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { checkTimeExpired } from '../../../utils/index';
//Components
import { Input, Button } from 'antd';
import { RouteComponentProps, navigate } from '@reach/router';
import Notification from '../notification';

// Styles
import './VerifyPhone.less';

// API
import {
  CreateToken,
  VerifyToken,
  GenerateToken,
  GetUserInformation,
} from '../../../API';
// Props Types
export interface VerifyPhoneProps extends RouteComponentProps {
  route?: string;
  handleAuth?: () => void;
}

const VerifyPhone: React.FC<VerifyPhoneProps> = (props: any) => {
  const [userNumber, setUserNumber] = React.useState<any>({});
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, setValue, errors } = useForm();

  const { handleAuth } = props;
  type FormValues = {
    otpcode: string;
  };

  const createToken = async (userInfo: any) => {
    const result = await CreateToken(userInfo).then((response) => response);
    console.log(result);
    if (result.status === 201) {
      console.log(result);
    } else {
      Notification(false, 'Failed to send verification token', result.message);
    }
  };
  useEffect(() => {
    register('otpcode', { required: true });
    const info = {
      dial_code: props.location.state.data.dial_code,
      phone_number: props.location.state.data.phone_number,
    };
    setUserNumber(info);
    console.log(props.location.state.data);
    createToken(info);
  }, []);

  const requestOtp = () => {
    if (checkTimeExpired('2021-01-31T13:20:00+0400')) {
      createToken(userNumber);
    }
  };
  const handleChange = (values: any) => {
    const { value } = values;
    setValue('otpcode', value);
  };
  const navigateBack = () => {
    navigate(-1);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true);
    const info = {
      otpcode: data.otpcode,
      phone_number: userNumber.phone_number,
      dial_code: userNumber.dial_code,
    };
    const verifyToken = async () => {
      const response = await VerifyToken(info).then((response) => response);
      console.log(response);
      if (response.status === 200) {
        const generateToken = async () => {
          const response = await GenerateToken(data.otpcode).then(
            (response) => response,
          );
          console.log(response);
          if (response.status === 201) {
            setLoading(false);
            localStorage.setItem('accessToken', response.data.data.token);
            localStorage.setItem(
              'refreshToken',
              response.data.data.refreshToken,
            );
            localStorage.setItem('authenticated', response.data.data.token);
            const getUserInformation = async () => {
              const information = await GetUserInformation(
                response.data.data.token,
              ).then((response) => response);
              console.log(information);
              if (information.status === 200) {
                setLoading(false);
                localStorage.setItem(
                  'UserRole',
                  JSON.stringify(information.data.data.roles),
                );
                localStorage.setItem(
                  'UserInfo',
                  JSON.stringify(information.data.data.user),
                );
                const roleList = information.data.data.roles.map(
                  (item: any) => {
                    return item.role;
                  },
                );
                if (roleList.includes('regular')) {
                  if (userNumber && userNumber.checkBuyer) {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const destinationRoute = sessionStorage.getItem(
                      'destinationRoute',
                    );
                    const output =
                      destinationRoute && JSON.parse(destinationRoute);
                    const outputRoute = `${output.currentRoute}/${output.togoRoute}`;
                    console.log(outputRoute);
                    navigate(outputRoute);
                    console.log('Buyer checked successfully!');
                  } else {
                    navigate('/');
                  }
                } else if (roleList.includes('seller')) {
                  navigate('/app/sellers');
                } else {
                  navigate('/');
                }
                console.log(roleList);
                handleAuth();
                console.log(information);
              } else {
                setLoading(false);
                Notification(
                  false,
                  'Fail to verify Token',
                  information.message,
                );
              }
            };
            getUserInformation();
          } else {
            setLoading(false);
            console.log(response.message);
          }

          navigate('/');
        };
        generateToken();
      } else {
        setLoading(false);
        Notification(false, 'Fail to verify token', response.message);
      }
    };
    verifyToken();
    console.log(info);
  };

  return (
    <div className="verifyPhone_container">
      <div className="verifyPhone_innerContainer">
        <div className="verifyPhone_inner">
          <div>
            <form
              className="verifyPhone_verifyCode"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="verifyPhone_header">
                <h2>Verify Mobile Number</h2>
              </div>
              <NumberFormat
                customInput={Input}
                placeholder="Enter Code"
                onValueChange={handleChange}
                style={{ width: '100%', height: '50px', fontSize: '16px' }}
                format="###-###"
              />
              <span style={{ fontSize: '1rem', color: 'red' }}>
                {errors.otpcode && 'Last name is required'}
              </span>
              <div className="verifyPhone_resendCode">
                <span style={{ marginRight: 5 }} onClick={navigateBack}>
                  <p>Change Number</p>
                </span>

                <div onClick={requestOtp}>
                  <span>Resend Code</span>
                </div>
              </div>
              <div className="verifyPhone_btn">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                >
                  {' '}
                  Confirm
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhone;
