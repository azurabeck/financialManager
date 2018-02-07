import React , { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'


class Emails extends Component {
    render() {
        return(
            <div>
                <ContentHeader icon='comment-o' title='Emails' />
                <Content> Emails content </Content>
            </div>
        )
    }
}

export default Emails