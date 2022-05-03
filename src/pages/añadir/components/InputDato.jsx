import React from 'react'

export default function InputDato({ text, onChange, value }) {
  return (
    <div className="my-3 row">
      <label
        htmlFor={'input' + text}
        className="col-lg-4 col-form-label text-center"
      >
        {text + ':'}
      </label>
      <div className="col-lg-8">
        <input
          type="text"
          className="form-control-plaintext"
          name={text}
          id={'input' + text}
          placeholder={text}
          value={value}
          onChange={onChange}
          style={{
            background: 'white',
            borderRadius: '5px',
            paddingLeft: '8px',
          }}
        />
      </div>
    </div>
  )
}
