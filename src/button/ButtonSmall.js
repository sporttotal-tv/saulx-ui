import React from 'react'
import Text from '../text/Base'

const RemoveButton = ({ id, item, style, color, onClick, icon, children }) => {
  return (
    <>
      <div
        onClick={onClick}
        style={{
          // height: 25,
          cursor: 'pointer',
          paddingLeft: 7.5,
          paddingRight: 7.5,
          paddingTop: 5,
          paddingBottom: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color,
          transition: 'color 0.2s, background-color 0.2s',
          ':hover': {
            backgroundColor: 'black',
            color: 'white'
          },
          ...style
        }}
      >
        <Text style={{ fontWeight: 300, fontSize: 12, marginRight: 3 }}>
          {icon}
        </Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{children}</Text>
      </div>
    </>
  )
}

export default RemoveButton
