import React from 'react'
import Base from './text/Base'
import { useHub } from '@saulx/hub'

const Icon = () => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      style={{
        flexGrow: 'none'
      }}
    >
      <rect
        x="0.121094"
        y="1.87872"
        width="2"
        height="8"
        rx="1"
        transform="rotate(-45 0.121094 1.87872)"
        fill="white"
      />
      <rect
        x="5.77832"
        y="0.464539"
        width="2"
        height="8"
        rx="1"
        transform="rotate(45 5.77832 0.464539)"
        fill="white"
      />
    </svg>
  )
}

export default ({
  children,
  style,
  to,
  onClose,
  onClick,
  color = 'black',
  size = 'small'
}) => {
  const hub = useHub()
  return (
    <Base
      style={{
        // height: size === 'large' ? 25 : 'auto',
        borderRadius: 4,
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        paddingRight: size === 'large' ? 10 : 5,
        paddingLeft: size === 'large' ? 10 : 5,
        fill: color,
        paddingTop: size === 'small' ? 2.5 : size === 'large' ? 7.5 : 0,
        paddingBottom: size === 'small' ? 2.5 : size === 'large' ? 7.5 : 0,
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: size === 'small' ? 10 : 12,
        color,
        ...style
      }}
      onClick={to && !onClick ? () => hub.set('device.history', to) : onClick}
    >
      {onClose ? (
        <div
          style={{
            height: 11,
            width: 11,
            marginRight: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={e => {
            e.stopPropagation()
            e.preventDefault()
            onClose(e, hub)
          }}
        >
          <Icon />
        </div>
      ) : null}
      {children}
    </Base>
  )
}
