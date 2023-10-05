import React from 'react';

import Button, { ButtonProps } from '@/components/UI/Button';
import Text from '@/components/UI/Text';

type TButtonPrimary = Omit<ButtonProps, 'children'> & {
  children: string;
};

const ButtonPrimary = ({ children, ...props }: TButtonPrimary) => {
  return (
    <Button {...props}>
      <Text type='body-medium' color='cwhite'>
        {children}
      </Text>
    </Button>
  );
};
export default ButtonPrimary;
