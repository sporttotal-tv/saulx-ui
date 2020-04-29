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

const ArrowDown = ({ style, arrowX }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      style={{
        zIndex: 1,
        transform: `translate3d(${arrowX}px, -1px, 0px)`,
        ...style
      }}
    >
      <path fill="rgba(0,0,0,0.2)" d="M0 1 L9 12 L18 1 L0 1" />
      <path fill="white" d="M1 0 L9 11 L17 0 L1 0" />
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
    }

    if (x < 25) {
      x = 25
    }

    if (x + objectWidth + 25 > width) {
      x = width - (objectWidth + 25)
    }

    if (targetRect) {
      tMiddleX = tmpX - x + targetRect.width / 2 - 9
    }

    setArrowX(tMiddleX + arrow.x)
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
      {direction === 'top' ? (
        <ArrowUp arrowX={arrowX} visible={visible} />
      ) : null}
      <div
        ref={ref}
        style={{
          transform: 'translate3d(0,0,0px,1px)',
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid rgba(0,0,0,0.2)',
          maxHeight:
            direction === 'bottom' ? top - height - 100 : height - top - 100,
          maxWidth: width - 100,
          backgroundColor: 'white',
          overflowX: 'auto',
          overflowY: 'auto'
        }}
      >
        {children}
      </div>
      {direction === 'bottom' ? (
        <ArrowDown arrowX={arrowX} visible={visible} />
      ) : null}
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
