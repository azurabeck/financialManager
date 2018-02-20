import React , { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import EmailList from './emailsList'
import EmailForm from './emailsForm'
import Line from '../common/layout/line'

class Emails extends Component {
    render() {
        return(
            <div>
                <ContentHeader icon='comment-o' title='Enviar novos emails' />
                <Content> 
                    <EmailList /> 
                    <Line />
                    <EmailForm />
                </Content>
            </div>
        )
    }
}

export default Emails