import React from 'react'
import Base from './text/Base'
import { useHub } from '@saulx/hub'

const Icon = () => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 24 24"
      style={{
        marginRight: 5
      }}
    >
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
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
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        paddingRight: size === 'large' ? 7.5 : 5,
        paddingLeft: size === 'large' ? 7.5 : 5,
        fill: color,
        paddingTop: size === 'small' ? 2.5 : size === 'large' ? 5 : 0,
        paddingBottom: size === 'small' ? 2.5 : size === 'large' ? 5 : 0,
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
