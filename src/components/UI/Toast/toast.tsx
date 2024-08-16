/* eslint-disable unused-imports/no-unused-vars */
import { Row } from 'antd'
import classNames from 'classnames'
import { toast as t } from 'sonner'

// import { Icon } from '~components/UI/IconFont/Icon';

import styles from './index.module.scss'
import Text from '@/components/UI/Text'

export const toast = {
  success: (message: string) => {
    t.custom(id => (
      <Row
        align="middle"
        justify="space-between"
        wrap={false}
        className={classNames(styles.msg, styles.msgSuccess)}
      >
        <Row align="middle" wrap={false}>
          {/* <Icon
            icon='t4font-check-circle-fill'
            color='success-main'
            onClick={() => t.dismiss(id)}
          /> */}
          <Text type="caption2" color="text-primary">
            {message}
          </Text>
        </Row>
        {/* <Icon icon='t4font-ic-close' onClick={() => t.dismiss(id)} /> */}
      </Row>
    ))
  },

  error: (message: string) => {
    t.custom(id => (
      <Row
        align="middle"
        justify="space-between"
        wrap={false}
        className={classNames(styles.msg, styles.msgError)}
      >
        <Row align="middle" wrap={false}>
          {/* <Icon
            icon='t4font-ic-close-circle-fill'
            color='error-main'
            onClick={() => t.dismiss(id)}
          /> */}
          <Text type="caption2" color="text-primary">
            {message}
          </Text>
        </Row>
        {/* <Icon icon='t4font-ic-close' onClick={() => t.dismiss(id)} /> */}
      </Row>
    ))
  },
}
