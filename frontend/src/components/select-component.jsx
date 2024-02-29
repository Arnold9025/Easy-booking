import React from 'react'
import { Form } from 'react-bootstrap'

function renderOption (option, index) {
    return <option value={option.value} key={index}>{option.nom}</option>
}

const SelectComponent = ({  id, name, options, onInput, text }) => (
    <div className='col form-group'>
        <Form.Select className='custom-select form-control' name={name} id={id} onInput={onInput} >
        <option>{text}</option>

            {options.map((option, index) => renderOption(option, index))}
        </Form.Select>
    </div>
)

export default SelectComponent
