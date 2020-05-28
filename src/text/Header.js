import React from 'react'
import Base from './Base'

export default ({ style, children, ...props }) => {
  return (
    <Base
      {...props}
      style={{
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: '0.02em',
        ...style
      }}
    >
      {children}
    </Base>
  )
}
