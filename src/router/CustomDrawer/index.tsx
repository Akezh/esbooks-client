import React, { FunctionComponent } from 'react';
import { CustomDrawerContainer } from './containers';

const CustomDrawer: FunctionComponent<any> = (props): JSX.Element => {
  return (
    <CustomDrawerContainer {...props} />
  );
};

export default CustomDrawer;