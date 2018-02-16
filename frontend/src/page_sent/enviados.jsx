import React , { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'


class Enviados extends Component {
    render() {
        return(
            <div>
                <ContentHeader icon='envelope-open-o' title='Histórico de emails enviados' />
                <Content> Enviados content </Content>
            </div>
        )
    }
}

export default Enviados