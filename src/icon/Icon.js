import React from 'react'

const Icon = ({
  onClick,
  onMouseDown,
  style,
  d,
  size = 12,
  children,
  viewBox
}) => {
  return (
    <svg
      onMouseDown={onMouseDown}
      onClick={onClick}
      width={size}
      height={size}
      viewBox={viewBox || '0 0 24 24'}
      style={style}
    >
      {d ? <path d={d} /> : children}
    </svg>
  )
}

export default Icon
