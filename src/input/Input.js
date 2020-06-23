import React, { useState, useEffect, useRef } from 'react'

export default ({
  style,
  type,
  onChange,
  value,
  placeholder,
  debounce,
  backgroundColor,
  defaultValue,
  autoFocus
}) => {
  const [state, setInternal] = useState(defaultValue)
  const ref = useRef()
  const [tmpInternal, setTmpInternal] = useState(false)
  const useInternal = tmpInternal || value === undefined

  useEffect(() => {
    return () => {
      clearTimeout(ref.timeout)
    }
  }, [ref])

  let isTime = false
  let allowedRange
  if (type === 'minutes') {
    isTime = true
    type = 'number'
    allowedRange = [0, 59]
  } else if (type === 'hours') {
    isTime = true
    type = 'number'
    allowedRange = [0, 23]
  } else if (type === 'year') {
    isTime = true
    type = 'number'
    allowedRange = [-9999999999, 99999999999]
  } else if (type === 'month') {
    isTime = true
    type = 'number'
    allowedRange = [1, 12]
  } else if (type === 'day') {
    isTime = true
    type = 'number'
    allowedRange = [1, 31]
  }

  return (
    <input
      type={type}
      autoFocus={autoFocus}
      placeholder={placeholder}
      value={(useInternal ? state : value) || ''}
      onChange={e => {
        let value = e.target.value

        if (allowedRange && value) {
          if (
            !isNaN(value * 1) &&
            value * 1 <= allowedRange[1] &&
            value * 1 >= allowedRange[0]
          ) {
            value = value * 1
          } else {
            setInternal(allowedRange[0])
            return
          }
        }

        setInternal(value)
        if (debounce) {
          setTmpInternal(true)
          clearTimeout(ref.timeout)
          ref.timeout = setTimeout(() => {
            onChange(value)
          }, debounce)
        } else {
          onChange(value)
        }
      }}
      style={{
        // borderRadius: 2.5,
        border: isTime ? '1px solid rgba(0,0,0,0.1)' : null,
        backgroundColor: '#fafbfc',
        borderRadius: 4,
        fontFamily:
          'San Fransisco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        appearance: 'none',
        paddingTop: isTime ? 5 : 10,
        paddingBottom: isTime ? 5 : 10,
        paddingLeft: isTime ? 10 : 15,
        paddingRight: isTime ? 10 : 15,
        fontSize: 15,
        width: isTime ? 85 : null,
        ...style
      }}
    />
  )
}
