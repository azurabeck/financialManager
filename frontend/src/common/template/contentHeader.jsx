import React from 'react'

export default props => (
    <section>
        <div>
             <h1 className='default'><i className={`fa fa-${props.icon}`}></i> {props.title} </h1>
        </div>
    </section>
)