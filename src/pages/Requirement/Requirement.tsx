import { DatePicker } from 'antd';
import { atom, useAtom } from 'jotai';
import React from 'react';
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
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default Requirement;
