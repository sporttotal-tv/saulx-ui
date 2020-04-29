import React, { useEffect, useRef, useState } from 'react'

const ArrowUp = ({ style, arrowX }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      style={{
        zIndex: 1,
        transform: `translate3d(${arrowX}px, 1px, 0px)`,
        ...style
      }}
    >
      <path fill="rgba(0,0,0,0.2)" d="M0 12 L9 0 L18 12 L0 12" />
      <path fill="white" d="M1 12 L9 1 L17 12 L1 12" />
    </svg>
  )
}

const Dropdown = ({
  target = { x: 0, y: 0 },
  direction = 'auto', // top, bottom
  arrow = { x: 0, y: 0 },
  children,
  size
}) => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)
  const [left, setX] = useState(0)
  const [top, setY] = useState(0)
  const [arrowX, setArrowX] = useState(0)

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

  if (direction === 'auto') {
    if (tmpY > height / 2) {
      direction = 'bottom'
    } else {
      direction = 'top'
    }
  }

  useEffect(() => {
    // now put it nice
    // set interval check difference :/
    const objectSize = ref.current.getBoundingClientRect()
    let x = 0,
      y = 0

    let tMiddleX

    if (direction === 'top') {
      if (targetRect) {
        x = tmpX - targetRect.width / 2 - objectSize.width / 2
        tMiddleX = tmpX - targetRect.width / 2
        y = tmpY + targetRect.height + 5
      }
    }

    if (x < 60) {
      x = 60
    }

    setArrowX(tMiddleX - x + 4.5 + arrow.x)
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
        flexDirection: 'column'
      }}
    >
      <ArrowUp arrowX={arrowX} visible={visible} />
      <div
        ref={ref}
        style={{
          top,
          left,
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid rgba(0,0,0,0.2)',
          maxHeight:
            direction === 'bottom' ? top - height - 100 : height - top - 100,
          maxWidth: width - 100,
          backgroundColor: 'white'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default (props, children) => {
  let size = 0
  props.hub.set('device.overlay', {
    fade: props.fade === void 0 || props.fade ? true : false,
    component: (
      <Dropdown size={size} {...props}>
        {children}
      </Dropdown>
    )
  })
  return (nprops, nchildren) => {
    props.hub.set('device.overlay', {
      component: (
        <Dropdown size={++cnt} {...props} {...nprops}>
          {nchildren || children}
        </Dropdown>
      )
    })
  }
}
