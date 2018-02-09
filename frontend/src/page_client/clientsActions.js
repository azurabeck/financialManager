import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {emails: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/clientCycle`)
    return {
        type: 'CLIENT_LIST_FETCHED',
        payload: request
    }
}

export function create(values) {  
    return chooseAction(values, 'post')
 }
    

export function update(values) {  
    return chooseAction(values, 'put')
}  

export function remove(values) {  
    return chooseAction(values, 'delete')
}  

export function showDelete(clientes) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete')
        //initialize('clientForm', clientes)
    ]
}

export function showUpdate(clientes) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        //initialize('clientForm', clientes)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('clientForm', INITIAL_VALUES)
    ]
}

function chooseAction(values, method) {

    return dispatch => {

        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/clientCycle/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro',
                    error))
            })
    }
}
    