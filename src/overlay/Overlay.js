import React, { useEffect, useState } from 'react'
import { useRpc, useHub } from '@saulx/hub'

export default ({ dark }) => {
  const overlay = useRpc('device.overlay')
  const hub = useHub()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!!overlay)
  }, [overlay])

  useEffect(() => {
    const esc = e => {
      if (e.keyCode === 27) {
        hub.set('device.overlay', false)
      }
    }
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('keydown', esc)
    }
  })

  if (overlay) {
    const { component, fade } = overlay
    const close = (
      <div
        onClick={() => {
          hub.set('device.overlay', false)
        }}
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          height: '100vh',
          width: '100vw',
          position: 'absolute'
        }}
      />
    )

    // position
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'background 0.15s',
          // backgroundColor: hub.get('device.overlay').backgroundColor || 'rgb(250,251,252)',
          backgroundColor: dark
            ? fade && visible
              ? 'rgba(10,11,12, 0.75)'
              : 'rgba(10,11,12, 0)'
            : fade && visible
            ? 'rgba(250,251,252, 0.75)'
            : 'rgba(250,251,252, 0)'
        }}
      >
        {close}
        {component}
      </div>
    )
  }

  return null
}
