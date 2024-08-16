import React from 'react'

import classNames from 'classnames'

import type { TColor } from '@/styles/color/color.variables'

interface TextProps {
  children: React.ReactNode
  type?:
    | 'heading1-extra-bold'
    | 'heading2-bold'
    | 'heading3-bold'
    | 'heading3-semi-bold'
    | 'heading4-semi-bold'
    | 'heading5-medium'
    | 'heading5-bold'
    | 'heading6-bold'
    | 'title1-semi-bold'
    | 'title2-semi-bold'
    | 'body1'
    | 'body2'
    | 'caption1-semi-bold'
    | 'caption2'
    | undefined
  color?: TColor
  disabled?: boolean
  state?: null | 'disable'
  className?: string
  onClick?: () => void
  element?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

const Text: React.FC<TextProps> = ({
  type,
  color,
  disabled = false,
  className = '',
  onClick = undefined,
  children,
  element = 'p',
}) => {
  const classes = classNames(type, color, { 'text-disable': disabled }, className)

  return React.createElement(
    element,
    {
      className: classes,
      onClick,
    },
    React.createElement(React.Fragment, undefined, children),
  )
}

export default Text
