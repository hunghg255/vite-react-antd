import { Row } from 'antd';
import classNames from 'classnames';
import { toast as t } from 'sonner';

// import { Icon } from '~components/UI/IconFont/Icon';

import Text from '@/components/UI/Text';

import styles from './index.module.scss';

export const toast = {
  success: (message: string) => {
    t.custom(() => (
      <Row
        align="middle"
        className={classNames(styles.msg, styles.msgSuccess)}
        justify="space-between"
        wrap={false}
      >
        <Row align="middle"
          wrap={false}
        >
          {/* <Icon
            icon='t4font-check-circle-fill'
            color='success-main'
            onClick={() => t.dismiss(id)}
          /> */}
          <Text color="text-primary"
            type="caption2"
          >
            {message}
          </Text>
        </Row>

        {/* <Icon icon='t4font-ic-close' onClick={() => t.dismiss(id)} /> */}
      </Row>
    ));
  },

  error: (message: string) => {
    t.custom(() => (
      <Row
        align="middle"
        className={classNames(styles.msg, styles.msgError)}
        justify="space-between"
        wrap={false}
      >
        <Row align="middle"
          wrap={false}
        >
          {/* <Icon
            icon='t4font-ic-close-circle-fill'
            color='error-main'
            onClick={() => t.dismiss(id)}
          /> */}
          <Text color="text-primary"
            type="caption2"
          >
            {message}
          </Text>
        </Row>

        {/* <Icon icon='t4font-ic-close' onClick={() => t.dismiss(id)} /> */}
      </Row>
    ));
  },
};
