import React from 'react'

const Icon = ({ style, d }) => {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" style={style}>
      <path d={d} />
    </svg>
  )
}

export default Icon
