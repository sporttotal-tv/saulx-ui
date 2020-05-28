import React from 'react'

export default ({ style, children, singleLine, onClick }) => {
  if (singleLine) {
    return (
      <div
        onClick={onClick}
        style={{
          fontFamily:
            'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontSize: 12,
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          width: '100%',
          cursor: onClick ? 'pointer' : null,
          ...style
        }}
      >
        {children}
      </div>
    )
  } else {
    return (
      <div
        onClick={onClick}
        style={{
          fontFamily:
            'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          fontSize: 12,
          cursor: onClick ? 'pointer' : null,
          ...style
        }}
      >
        {children}
      </div>
    )
  }
}
