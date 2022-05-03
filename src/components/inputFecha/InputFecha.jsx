import React from 'react'

export default function InputFecha({ text }) {
  return (
    <div className="mb-3 row">
      <label htmlFor="inputFecha" className="col-md-3 col-form-label">
        {text}
      </label>
      <div className="col-md-9">
        <input
          type="date"
          className="form-control-plaintext"
          id="inputFecha"
          style={{
            background: 'white',
            borderRadius: '5px',
            paddingLeft: '2px',
          }}
        />
      </div>
    </div>
  )
}
