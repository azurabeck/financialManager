import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FieldArray } from 'redux-form'
import { getList, showUpdate, showDelete } from './clientsActions'

class ClientList extends Component {

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(cc => (
            <tr key={cc._id}>
                <td>{cc.name}</td>
                <td>{cc.cpf}</td>
                <td>{cc.emails.map(item => `${item.email}`)}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(cc)}> 
                        <i className='fa fa-pencil'></i>                    
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(cc)}> 
                        <i className='fa fa-trash-o'></i>                    
                    </button>
                </td>
            </tr>    
        ))
    }

    render(){
        console.log (this.props.list)
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Email</th>
                            <th className='table-action'>Ações</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.renderRows()}
                    </tbody>   
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.clientList.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientList)