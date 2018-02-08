import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/clientCycle`)
    return {
        type: 'CLIENT_LIST_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/clientCycle`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
            dispatch(init())            
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', erro))
        })
    }   
}

export function showUpdate(clientes) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('clientForm', clientes)
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