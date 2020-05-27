import React from 'react'
import Loader from './Loader'

export default ({ empty, header, loading, children, color, ...props }) => {
  return (
    <div {...props}>
      {header || null}
      {loading ? (
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Loader color={color} />
        </div>
      ) : !loading && (!children || children.length === 0) ? (
        <div
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {empty}
        </div>
      ) : (
        children
      )}
    </div>
  )
}
