import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FieldArray } from 'redux-form'
import { getList } from '../page_client/clientsActions'

class ClientList extends Component {

    componentWillMount(){
        this.props.getList()
    }
    
    renderRows(){
        const list = this.props.list || []
        return list.map(cc => (
            <tr key={cc._id}>
                <td>
                  <input className='checkboxCustom' type='checkbox'></input>
                </td>
                <td>{cc.name}</td>
                <td>{cc.emails.map(item => <li key={item._id}>{item.email}</li>)}</td>                
            </tr>    
        ))
    }

    render(){
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr className='table_title_email'>
                            <th></th>
                            <th>Nome</th>
                            <th>Email</th>                            
                        </tr>
                    </thead> 
                    <tbody className='table_content_email'>
                        {this.renderRows()}
                    </tbody>   
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.clientList.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientList)