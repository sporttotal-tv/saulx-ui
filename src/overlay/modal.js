import React, { useEffect, useState } from 'react'
import Title from '../text/title'
import Button from '../button/Button'
import { useHub } from '@saulx/hub'

const Close = () => {
  const hub = useHub()
  return (
    <div
      style={{
        cursor: 'pointer',
        width: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center'
      }}
      onClick={() => {
        hub.set('device.overlay', false)
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24">
        <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
      </svg>
    </div>
  )
}

const Modal = ({ title, children, confirm, cancel, hub }) => {
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
        width: 600,
        maxWidth: 'calc(100%-100px)',
        height: 'auto',
        maxHeight: 'calc(100%-100px)',
        border: '1px solid black',
        padding: 10,
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
        <Close />
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
