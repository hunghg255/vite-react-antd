import React from 'react';

import { Breadcrumb, DatePicker, Steps } from 'antd';
import { atom, useAtom } from 'jotai';
import { Helmet } from 'react-helmet';

const countAtom = atom(0);
countAtom.debugLabel = 'Count';

const Requirement = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <>
      <Helmet>
        <title>Requirement</title>
      </Helmet>

      <h1>Hello Requirement</h1>
      <DatePicker />

      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <a href='/'>Application Center </a>,
          },
          {
            title: <a href='/'>Application List</a>,
          },
          {
            title: 'An Application',
          },
        ]}
      />
      <Steps
        current={1}
        items={[
          {
            title: 'Finished',
            description: 'asdsa',
          },
          {
            title: 'In Progress',
            description: 'asdsa',
            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description: 'asdsa',
          },
        ]}
      />
      <DatePicker />

      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default Requirement;
