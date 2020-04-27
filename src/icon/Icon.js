import React from 'react'

const Icon = ({ style, d, size = 12 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path d={d} />
    </svg>
  )
}

export default Icon
