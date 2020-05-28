import React from 'react'
import Base from '../text/Base'

export default ({
  checked,
  onChange,
  knobColor = 'black',
  style,
  label,
  noLabel
}) => {
  return (
    <div
      onClick={() => {
        onChange(!checked)
      }}
      style={{
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        ...style
      }}
    >
      <div
        style={{
          width: 36,
          transition: 'background 0.2s, transform 0.2s',
          borderRadius: '15px',
          background: checked ? 'black' : 'white',
          padding: 2,
          border: '1px solid rgba(0,0,0,0.5)'
        }}
      >
        <div
          style={{
            transition: 'background 0.2s, transform 0.2s',
            width: 16,
            borderRadius: '50%',
            transform: `translate3d(${checked ? 14 : 0}px, 0px, 0)`,
            height: 16,
            // opacity: checked ? 1 : 0.4,
            backgroundColor: checked ? 'white' : 'black'
          }}
        />
      </div>
      {noLabel ? null : (
        <Base
          style={{
            marginLeft: 15,
            // fontWeight: 'bold',
            letterSpacing: '0.02em',
            fontSize: 15
          }}
        >
          {label || ''}
        </Base>
      )}
    </div>
  )
}
