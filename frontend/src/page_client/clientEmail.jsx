import React, { Component } from 'react'
import { Field } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/layout/input'

class EmailList extends Component {

    renderRows() {

        return (
            <tr>
                <td><Field name='newemail[0].email' component={Input}
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
        )
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
                                <th>Ações</th>
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
export default EmailList
