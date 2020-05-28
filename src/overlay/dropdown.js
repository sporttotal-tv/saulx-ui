import React, { useEffect, useRef, useState } from 'react'
import { useHub } from '@saulx/hub'

const Dropdown = ({
  target = { x: 0, y: 0 },
  direction = 'auto', // top, bottom
  arrow = { x: 0, y: 0 },
  children,
  fade,
  size
}) => {
  const ref = useRef()
  const hub = useHub()
  const [visible, setVisible] = useState(false)
  const [left, setX] = useState(0)
  const [top, setY] = useState(0)

  let tmpX, tmpY
  let targetRect

  if (target.target && target.target) {
    tmpX = target.pageX || target.x
    tmpY = target.pageY || target.y
  } else if (target.getBoundingClientRect) {
    // depending on direction
    const rect = target.getBoundingClientRect()
    targetRect = rect
    tmpX = rect.left
    tmpY = rect.top
  } else {
    tmpX = target.x || 0
    tmpY = target.y || 0
  }

  const width = global.innerWidth
  const height = global.innerHeight

  if (direction === 'right') {
    if (targetRect) {
      tmpY = targetRect.top - 15
      tmpX = targetRect.left + targetRect.width
    }
  } else if (direction === 'auto') {
    if (tmpY > height / 2) {
      direction = 'bottom'
    } else {
      direction = 'top'
    }
  }

  useEffect(() => {
    const c = e => {
      if (e.keyCode === 13) {
        hub.set('device.overlay', false)
      }
    }
    document.addEventListener('keydown', c)
    return () => {
      document.removeEventListener('keydown', c)
    }
  }, [])

  useEffect(() => {
    // now put it nice
    // set interval check difference :/

    const objectWidth = ref.current.offsetWidth
    const objectHeight = ref.current.offsetHeight

    let x = 0
    let y = 0

    let tMiddleX = 0

    if (direction === 'top') {
      if (targetRect) {
        // targetRect.width / 2
        tMiddleX = tmpX - x + targetRect.width / 2 - 9
        x = tMiddleX - objectWidth / 2
        y = tmpY + targetRect.height + 5
      }
    } else if (direction === 'bottom') {
      if (targetRect) {
        // targetRect.width / 2
        x = tmpX - objectWidth / 2
        y = tmpY - targetRect.height - 5 - objectHeight
      }
    } else if (direction === 'right') {
      x = tmpX + 10
      y = tmpY
    }

    if (x < 5) {
      x = 5
    }

    if (x + objectWidth + 5 > width) {
      x = width - (objectWidth + 5)
    }

    if (direction === 'right') {
      if (targetRect) {
        tMiddleX = tmpY - y + targetRect.height / 2 + 7
      }
      if (y < 5) {
        y = 5
      }
    } else {
      if (targetRect) {
        tMiddleX = tmpX - x + targetRect.width / 2 - 9
      }
    }
    setX(x)
    setY(y)
    setVisible(true)

    return () => {}
  }, [ref, size, tmpY, tmpX])

  return (
    <div
      style={{
        top,
        left,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.25s, transform 0.125s',
        transform: visible ? 'scale(1)' : 'scale(0.9)',
        position: 'fixed',
        display: 'flex',
        flexDirection: direction === 'right' ? 'row' : 'column'
      }}
    >
      {direction === 'top' ? <div style={{ height: 10 }} /> : null}
      {direction === 'right' ? <div style={{ width: 15 }} /> : null}
      <div
        ref={ref}
        style={{
          transform: 'translate3d(0,0,0px,1px)',
          padding: 20,
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxHeight:
            direction === 'bottom' ? top - height - 100 : height - top - 100,
          maxWidth: width - 100,
          backgroundColor: 'white',
          boxShadow:
            fade === false
              ? 'rgba(0,0,0,0.1) 0px 0px 40px'
              : 'rgba(0,0,0,0.05) 0px 0px 30px',
          overflowX: 'auto',
          overflowY: 'auto'
        }}
      >
        {children}
      </div>
      {direction === 'bottom' ? <div style={{ height: 10 }} /> : null}
    </div>
  )
}

export default (props, children) => {
  let size = 0
  props.hub.set('device.overlay', {
    fade: props.fade === undefined ? true : props.fade,
    component: (
      <Dropdown size={size} {...props}>
        {children}
      </Dropdown>
    )
  })
  return (nprops, nchildren) => {
    props.hub.set('device.overlay', {
      component: (
        <Dropdown size={++size} {...props} {...nprops}>
          {nchildren || children}
        </Dropdown>
      )
    })
  }
}
