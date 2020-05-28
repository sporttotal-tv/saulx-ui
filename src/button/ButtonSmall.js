import React from 'react'
import Text from '../text/Base'

const ButtonSmall = ({
  id,
  item,
  style,
  color = '#EFEFEF',
  onClick,
  icon,
  children
}) => {
  return (
    <>
      <div
        onClick={onClick}
        style={{
          // height: 25,
          cursor: 'pointer',
          paddingLeft: 15,
          minHeight: 32,
          maxHeight: 32,
          paddingRight: 15,
          paddingTop: 6.5,
          paddingBottom: 6.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color,
          borderRadius: 48,
          transition: 'color 0.2s, background-color 0.2s',
          ':hover': {
            backgroundColor: 'black',
            color: 'white',
            fill: 'white'
          },
          ...style
        }}
      >
        <div style={{ marginRight: 4, marginTop: 1 }}>{icon}</div>
        <Text
          style={{ fontSize: 12, fontWeight: 'bold', letterSpacing: '-0.02em' }}
        >
          {children}
        </Text>
      </div>
    </>
  )
}

export default ButtonSmall
