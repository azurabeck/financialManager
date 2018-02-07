import React from 'react'
import Header from '../template/contentHeader'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-lg'>
            <i className="fa fa-ravelry"/> Financial Manager </span> 
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Header title='Clientes' icon='user-o' />
        </nav> 
    </header>
)