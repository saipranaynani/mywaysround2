import React, { useId } from 'react'

function Input({labelName, onInputChange, value}) {
  const id = useId();

  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{labelName}</label>
      <input type="text" id={id} value={value} required onChange={onInputChange}/>
    </div>
  )
}

export default Input