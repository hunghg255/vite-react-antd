import React from 'react';

import { Helmet } from 'react-helmet';

import { Icon } from '@/components/UI/IconFont/Icon';

const Requirement = () => {
  return (
    <>
      <Helmet>
        <title>Requirement</title>
      </Helmet>

      <h1>Hello Requirement</h1>

      <Icon iconName='t4font-vite' style={{ color: 'red' }} />
    </>
  );
};

export default Requirement;
