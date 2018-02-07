import React , { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'


class Controle extends Component {
    render() {
        return(
            <div>
                <ContentHeader icon='ravelry' title='Controle' />
                <Content> Controle content </Content>
            </div>
        )
    }
}

export default Controle