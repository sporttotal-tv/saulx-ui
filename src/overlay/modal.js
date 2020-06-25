import React, { useEffect, useState } from 'react'
import Title from '../text/title'
import Button from '../button/ButtonSmall'
import Close from '../icon/Close'

const Modal = ({ title, children, confirm, cancel, width = 600, hub }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)

    const c = e => {
      if (e.keyCode === 13) {
        hub.set('device.overlay', false)
        if (typeof confirm === 'function') {
          confirm(e)
        } else if (confirm.onConfirm) {
          confirm.onConfirm(e)
        }
      }
    }
    document.addEventListener('keydown', c)
    return () => {
      document.removeEventListener('keydown', c)
    }
  }, [])

  const footer =
    confirm || cancel ? (
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        {cancel ? (
          <Button
            onClick={e => {
              hub.set('device.overlay', false)
              if (typeof cancel === 'function') {
                cancel(e)
              } else if (typeof cancel === 'object' && cancel.onCancel) {
                cancel.onCancel(e)
              }
            }}
          >
            {(typeof cancel === 'object' && cancel.title) || 'Cancel'}
          </Button>
        ) : null}
        {confirm ? (
          <Button
            style={{ marginLeft: 10 }}
            onClick={e => {
              hub.set('device.overlay', false)
              if (typeof confirm === 'function') {
                confirm(e)
              } else {
                confirm.onConfirm(e)
              }
            }}
          >
            {confirm.title || 'Confirm'}
          </Button>
        ) : null}
      </div>
    ) : null

  return (
    <div
      style={{
        backgroundColor: 'white',
        boxShadow: 'rgba(0,0,0,0.1) 0px 0px 40px',
        width,
        maxWidth: 'calc(100%-100px)',
        height: 'auto',
        maxHeight: 'calc(100%-100px)',
        borderRadius: 4,
        padding: 30,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s, transform 0.15s',
        transform: visible ? 'scale(1)' : 'scale(0.9)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: children ? 10 : 0
        }}
      >
        {title ? (
          <Title
            style={{
              color: 'black'
            }}
          >
            {title}
          </Title>
        ) : (
          <div />
        )}
        <Close large onClick={() => hub.set('device.overlay', false)} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'calc(100%-200px)'
        }}
      >
        <div
          style={{
            overflow: 'auto',
            height: 'auto',
            maxHeight: 'calc(100vh-200px)'
          }}
        >
          {children}
        </div>
        {footer}
      </div>
    </div>
  )
}

export default (props, children) => {
  props.hub.set('device.overlay', {
    fade: true,
    position: 'center',
    component: <Modal {...props}>{children}</Modal>
  })
  return (nprops, nchildren) => {
    props.hub.set('device.overlay', {
      component: (
        <Modal {...props} {...nprops}>
          {nchildren || children}
        </Modal>
      )
    })
  }
}
