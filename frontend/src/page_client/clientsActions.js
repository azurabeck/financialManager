import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

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
            dispatch([
                  resetForm('clientForm'),
                  getList(),
                  selectTab('tabList'),
                  showTabs('tabList', 'tabCreate')
                  ])              
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', erro))
        })
    }   
}