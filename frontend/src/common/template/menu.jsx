import React from 'react'
import MenuItem from './menuItem'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='clientes' label='Clientes' icon='user-o'/>           
        <MenuItem path='emails' label='Enviar Emails' icon='comment-o'/>
        <MenuItem path='enviados' label='Emails Enviados' icon='envelope-open-o' />
        <MenuItem path='controle' label='Controle' icon='ravelry' />
    </ul>
)