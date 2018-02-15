import { combineReducers } from 'redux'
/*import { reducer as formReducer } from 'redux-form'*/
import { reducer as toastrReducer } from 'react-redux-toastr'
import AuthReducer from '../auth/authReducer'

import TabReducer from '../common/tab/tabReducer'
import ClientListReducer from '../page_client/clientListReducer'
import { reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({    
    tab: TabReducer,
    clientList: ClientListReducer,
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})

export default rootReducer