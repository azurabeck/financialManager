import React from 'react'

export default props => (
        <div>
             <h1 className='default-no-section'><i className={`fa fa-${props.icon}`}></i> {props.title} </h1>
        </div>
)