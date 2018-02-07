import React from 'react'

export default props => (
    <section className='role'>
        <div className='col-md-12 page-title-default'>
             <h1 className='default'><i className={`fa fa-${props.icon}`}></i> {props.title} </h1>
        </div>
    </section>
)