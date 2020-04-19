import React from 'react'

export default ({ style, value, options, onChange }) => {
  return (
    <select
      style={{
        color: 'inherit',
        appearance: 'none',
        position: 'relative',
        backgroundColor: 'transparent',
        margin: 0,
        borderRadius: 2.5,
        border: '1px solid rgba(0,0,0,0.1)',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        padding: 5,
        fontSize: 12,
        ...style,
      }}
      value={value || undefined}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
