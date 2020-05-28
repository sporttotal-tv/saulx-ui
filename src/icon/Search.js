import React from 'react'
import Icon from './Icon'

const Search = ({ style, color = 'black' }) => {
  return (
    <Icon width="15" height="14" viewBox="0 0 15 14" fill="none" style={style}>
      <path
        d="M6.43739 11.6667C9.44038 11.6667 11.8748 9.2789 11.8748 6.33336C11.8748 3.38783 9.44038 1 6.43739 1C3.4344 1 1 3.38783 1 6.33336C1 9.2789 3.4344 11.6667 6.43739 11.6667Z"
        stroke={color}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2343 13L10.2777 10.1"
        stroke={color}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export default Search
