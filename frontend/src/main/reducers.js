import { combineReducers } from 'redux'

import TabReducer from '../common/tab/tabReducer'
import ClientListReducer from '../page_client/clientListReducer'


const rootReducer = combineReducers({    
    tab: TabReducer,
    clientList: ClientListReducer
})

export default rootReducer