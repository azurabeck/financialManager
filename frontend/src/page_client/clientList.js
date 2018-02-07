import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './clientsActions'

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
                <td>{cc.emails}</td>
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
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientList)