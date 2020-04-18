import React from 'react'
//<Switch checked={!!elValue} onChange={this.onChange} />
export default ({ checked, onChange }) => {
  return (
    <div
      onClick={() => {
        onChange(!checked)
      }}
      style={{
        width: 30,
        padding: 5,
        border: '1px solid black',
      }}
    >
      <div
        style={{
          width: 15,
          height: 15,
          backgroundColor: checked ? 'black' : 'lightgrey',
        }}
      ></div>
    </div>
  )
}
