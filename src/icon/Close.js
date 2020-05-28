import React from 'react'
import Icon from './Icon'

const Close = ({ style, onMouseDown, large, onClick }) => {
  return (
    <Icon
      onMouseDown={onMouseDown}
      onClick={onClick}
      size={large ? 12 : 8}
      style={style}
      viewBox="0 0 8 8"
    >
      <rect
        x="0.121094"
        y="1.87872"
        width="2"
        height="8"
        rx="1"
        transform="rotate(-45 0.121094 1.87872)"
      />
      <rect
        x="5.77832"
        y="0.464539"
        width="2"
        height="8"
        rx="1"
        transform="rotate(45 5.77832 0.464539)"
      />
    </Icon>
  )
}

export default Close
