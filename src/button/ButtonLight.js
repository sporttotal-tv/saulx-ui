import React from 'react'
import { Link } from '@saulx/hub'

const ButtonLight = ({ style, children, to, active, onClick }) => {
  const isFn = typeof active === 'function'
  const isActive = isFn ? active(to) : active
  return (
    <div
      style={{
        display: 'flex',
        paddingBottom: 10,
        borderBottom: isActive ? '2px solid black' : '2px solid rgba(0,0,0,0)',
        ...style
      }}
    >
      {!to ? (
        <div
          style={{
            cursor: 'pointer',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontSize: 16,
            fontWeight: isActive ? 'bold' : 'normal',
            letterSpacing: '0.02em'
          }}
          onClick={onClick}
        >
          {children}
        </div>
      ) : (
        <Link
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontSize: 16,
            fontWeight: isActive ? 'bold' : 'normal',
            letterSpacing: '0.02em'
          }}
          to={to}
          onClick={onClick}
        >
          {children}
        </Link>
      )}
    </div>
  )
}

export default ButtonLight
