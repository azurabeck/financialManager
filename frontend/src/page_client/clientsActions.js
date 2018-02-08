import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const BASE_URL = 'http://localhost:3003/api/clientCycle'

export function getList() {
    const request = axios.get(`${BASE_URL}`)
    return {
        type: 'CLIENT_LIST_FETCHED',
        payload: request
    }
}

export function create(values) {
    axios.post(`${BASE_URL}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', erro))
        })

    return {
        type: 'TEMP'
    }
}