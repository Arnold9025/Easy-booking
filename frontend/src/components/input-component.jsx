import React from 'react'

const InputComponent = ({ text, type, id, name, value, className, onChange }) => (
    <div>
        <label htmlFor={id}>{text}</label>
        <input
            className={className}
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            
        />
    </div>
)

export default InputComponent
