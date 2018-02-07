import { combineReducers } from 'redux'

import TabReducer from '../common/tab/tabReducer'
import ClientListReducer from '../page_client/clientListReducer'
import { reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({    
    tab: TabReducer,
    clientList: ClientListReducer,
    form: formReducer
})

export default rootReducer