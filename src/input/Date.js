import React, { useState, useEffect } from 'react'
import Input from './Input'
import Text from '../text/Base'
import Button from '../button/ButtonSmall'
import { useHub } from '@sporttotal/hub'
import parseTimestamp from '../parseTimestamp'

const DateInput = ({ data, setData }) => {
  return (
    <div
      style={{
        paddingBottom: 15,
        paddingLeft: 15,
        marginLeft: 15,
        borderLeft: '1px solid rgba(0,0,0,0.1)'
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          marginBottom: 15
        }}
      >
        Date
      </Text>
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Input
          value={data.date[0]}
          placeholder="Day"
          type="day"
          style={{ textAlign: 'center', backgroundColor: 'white !important' }}
          onChange={value => {
            data.date[0] = value
            setData(data)
          }}
        />
        <div
          style={{
            marginLeft: 10,
            marginRight: 10
          }}
        >
          /
        </div>
        <Input
          value={data.date[1]}
          placeholder="Month"
          type="month"
          style={{ textAlign: 'center', backgroundColor: 'white !important' }}
          onChange={value => {
            data.date[1] = value
            setData(data)
          }}
        />
        <div
          style={{
            marginLeft: 5,
            marginRight: 5
          }}
        >
          /
        </div>
        <Input
          value={data.date[2]}
          placeholder="Year"
          type="year"
          style={{ textAlign: 'center', backgroundColor: 'white !important' }}
          onChange={value => {
            data.date[2] = value
            setData(data)
          }}
        />
      </div>
    </div>
  )
}

export default ({ onChange, value, defaultDate = Date.now() }) => {
  const hub = useHub()
  // parse initial
  value = parseTimestamp(value || defaultDate)
  const [data, sData] = useState(value)
  const [isError, setError] = useState()

  const setData = d => {
    sData({ ...d })
  }

  const change = () => {
    const now = new Date()

    const month = 1 * data.date[1] - 1
    let def
    if (defaultDate) {
      def = parseTimestamp(defaultDate)
      if (def.date.length === 0) {
        def = undefined
      }
    }
    // new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
    const arr = [
      1 * data.date[2] || (def ? def.date[2] * 1 : now.getFullYear()),
      isNaN(month) ? (def ? def.date[1] - 1 : now.getMonth()) : month,
      1 * data.date[0] || (def ? def.date[0] : now.getDate()),
      1 * data.time[0] || undefined,
      1 * data.time[1] || undefined
    ]

    const d = new Date(...arr.filter(v => v !== undefined))
    const ms = d.getTime()

    if (isNaN(ms)) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 500)
    } else {
      hub.set('device.overlay', false)
      onChange(ms)
    }
  }

  useEffect(() => {
    const c = e => {
      if (e.keyCode === 13) {
        hub.set('device.overlay', false)
        change(data)
      }
    }
    document.addEventListener('keydown', c)
    return () => {
      document.removeEventListener('keydown', c)
    }
  }, [])

  return (
    <div
      style={{
        width: 550
      }}
    >
      <div
        style={{
          width: 550,
          display: 'flex'
        }}
      >
        <div>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginBottom: 15
            }}
          >
            Time
          </Text>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Input
              placeholder="Hours"
              type="hours"
              style={{
                textAlign: 'center',
                backgroundColor: 'white !important'
              }}
              value={data.time[0]}
              onChange={value => {
                data.time[0] = value
                setData(data)
              }}
            />
            <div
              style={{
                marginLeft: 10,
                marginRight: 10
              }}
            >
              :
            </div>
            <Input
              placeholder="Minutes"
              type="minutes"
              value={data.time[1]}
              style={{
                textAlign: 'center',
                backgroundColor: 'white !important'
              }}
              onChange={value => {
                data.time[1] = value
                setData(data)
              }}
            />
          </div>
        </div>
        <DateInput data={data} setData={setData} />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 15
        }}
      >
        <Button
          color="black"
          style={{
            color: 'white !important',
            fontWeight: 'bold',
            border: isError ? '1px solid red' : '1px solid black'
          }}
          onClick={() => change(data)}
        >
          Confirm
        </Button>
      </div>
    </div>
  )
}
