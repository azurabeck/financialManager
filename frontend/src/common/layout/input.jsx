import React from 'react'

export default props => (
    <input {...props.input}
        className='form-control email'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
)
