import React from 'react'

export default function InputOpciones({ text, data, onChange, value }) {
  return (
    <div className="my-3 row">
      <label
        htmlFor={'input' + text}
        className="col-lg-4 col-form-label text-center"
      >
        {text + ':'}
      </label>
      <div className="col-lg-8">
        <select
          className="form-select"
          id={'input' + text}
          name={text}
          value={value}
          onChange={onChange}
        >
          <option defaultValue>Seleccione una opción</option>
          data &&
          {data.map((e) => (
            <option key={e.value} value={e.value}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
