import React from 'react'

export default function SelectBox(props) {
    const name = props.name;
    const defaultValue = props.defaultValue;
    const data = props.data
    const handleFunction = props.handleFunction
    const myView = data.map((item) => {
        return (defaultValue === item.value ? <option key={item.value} value={item.value} selected >{item.label}</option> :
            <option key={item.value} value={item.value} >{item.label}</option>
        )
    }
    )
    return (
        <select name={name} className="form-select custom-select" onChange={handleFunction}>
            <option value={-1}>-----</option>
            {myView}
        </select>
    )
}
