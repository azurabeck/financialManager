import React from 'react' 
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

//import App from './app'
import AuthOrApp from './authOrApp'
import Client from '../page_client/clientes'
import Email from '../page_email/emails'
import Sent from '../page_sent/enviados'
import Control from '../page_control/controle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Client} />
            <IndexRoute component={Email} />
            <IndexRoute component={Sent} />
            <IndexRoute component={Control} />
        </Route>    
        <Redirect from='*' to='/' />
    </Router>
)