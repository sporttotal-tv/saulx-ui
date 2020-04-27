import React, { useState } from 'react'
import Icon from '../icon/Search'

const Input = ({ style, onChange, value, placeholder }) => {
  const [state, setInternal] = useState()
  const useInternal = value === undefined

  return (
    <input
      placeholder={placeholder}
      value={useInternal ? state : value}
      onChange={e => {
        setInternal(e.target.value)
        onChange(e.target.value)
      }}
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        appearance: 'none',
        fontSize: 12,
        fontWeight: 'bold',
        ...style
      }}
    />
  )
}

const Search = ({ style, onChange, value, placeholder }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid rgba(0,0,0,0.1)',
        borderRadius: 2.5,
        padding: 5,
        ...style
      }}
    >
      <Search.Icon />
      <Input onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  )
}

Search.Icon = ({ style }) => {
  return (
    <Icon
      style={{
        marginLeft: 2.5,
        marginRight: 7.5,
        ...style
      }}
    />
  )
}

Search.Input = Input

export default Search
