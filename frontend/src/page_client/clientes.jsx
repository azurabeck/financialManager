import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../common/template/content'
import Tabs from '../common/tab/tab'
import TabsHeader from '../common/tab/tabsHeader' 
import TabsContent from '../common/tab/tabsContent'
import TabHeaderContent from '../common/tab/tabHeaderContent'
import TabContent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'
import { create } from './clientsActions'

import List from './clientList'
import Form from './clientForm'

class Clients extends Component {

    componentWillMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <Content>
                        <Tabs>
                            <TabsHeader>
                                <TabHeaderContent label='Listar' icon='bars' target='tabList' />
                                <TabHeaderContent label='Incluir' icon='plus' target='tabCreate' />
                                <TabHeaderContent label='Alterar' icon='pencil' target='tabUpdate' />
                                <TabHeaderContent label='Excluir' icon='trash-o' target='tabDelete' />
                            </TabsHeader>
                            <TabsContent>
                                <TabContent id='tabList'><List /></TabContent>
                                <TabContent id='tabCreate'>
                                    <Form onSubmit={this.props.create}/>
                                </TabContent>
                                <TabContent id='tabUpdate'>
                                    <Form />
                                </TabContent>
                                <TabContent id='tabDelete'><h1>Deletar</h1></TabContent>
                            </TabsContent>
                        </Tabs>
                  </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab, showTabs, create}, dispatch)
export default connect(null, mapDispatchToProps)(Clients)
