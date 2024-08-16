import React from 'react'

import classNames from 'classnames'

import type { Ticon } from '../../../../public/svgtocss/icon-type'

export function Icon({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement> & { icon: Ticon, className?: string }) {
  // @ts-expect-error
  return <i className={classNames(props.icon, className)} {...props} />
}
