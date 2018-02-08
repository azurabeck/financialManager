import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/layout/input'


class EmailList extends Component {

    add(index, item={}) {
        if(!this.props.readOnly) {  
            this.props.arrayInsert('clientForm', 'emails', index, item)            
        }
    }

    renderRows() {
        
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr  key={index}>
                <td><Field name={`emails[${index}]`} component={Input}
                    placeholder='Informe o email' readOnly={this.props.readOnly} />
                </td>

                <td>
                    <button type='button' className='btn btn-success'
                        onClick={() => this.add(index + 1)}><i className="fa fa-plus"></i>
                    </button>

                    <button type='button' className='btn btn-danger'
                        onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>

            </tr>
        ))
    }

    render() {

        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Emails</legend>
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th className='table-action'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert },
    dispatch)
export default connect(null, mapDispatchToProps)(EmailList)
    
