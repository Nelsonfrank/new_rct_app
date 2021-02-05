import React, { Component } from 'react';
import { BuyerProvider } from './BuyerContextType';
// import { navigate } from '@reach/router';

class BuyerContext extends Component {
  state = {
    path: '',
    platformVariety: [],
    sellerInfo: {},
  };

  savePlatformVariety = (getValues, path) => {
    this.setState({
      platformVariety: getValues,
      path: path,
    });
  };

  saveSellerInfo = (value, path) => {
    this.setState({
      sellerInfo: value,
      path: path,
    });
  };
  render() {
    const authProviderValue = {
      ...this.state,
      saveSellerInfo: this.saveSellerInfo,
      savePlatformVariety: this.savePlatformVariety,
    };
    return (
      <BuyerProvider value={authProviderValue}>
        {this.props.children}
      </BuyerProvider>
    );
  }
}

export default BuyerContext;
