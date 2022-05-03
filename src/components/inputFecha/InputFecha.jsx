import React from 'react'

export default function InputFecha({ text, id, onChange }) {
  return (
    <div className="mb-3 row">
      <label htmlFor={'#' + id} className="col-lg-3 col-form-label">
        {text + ':'}
      </label>
      <div className="col-lg-9">
        <input
          type="date"
          className="form-control-plaintext"
          id={id}
          name={text}
          onChange={onChange}
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
