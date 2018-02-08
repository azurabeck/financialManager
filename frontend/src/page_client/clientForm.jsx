import React, { Component } from 'react'
import { reduxForm, Field, formValeuSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './clientsActions'
import Grid from '../common/layout/grid'
import LabelAndInput from '../common/layout/labelAndInput'
import EmailList from './clientEmail'


class ClientForm extends Component {
    render() {

        const { handleSubmit, readOnly } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='cpf' component={LabelAndInput} type='text' readOnly={readOnly}
                        label='CPF' cols='12 4' placeholder='Informe o cpf'/>
                    <Field name='notes' component={LabelAndInput} readOnly={readOnly}
                        label='Notas' cols='12 4' placeholder='Alguma observação sobre o cliente?' />

                    <EmailList cols='12 6' readOnly={readOnly}/>
                </div>
                <div className='box-footer'>

                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default btn-style' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}



ClientForm = reduxForm({form: 'clientForm', destroyOnUnmount:
false})(ClientForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(ClientForm)





