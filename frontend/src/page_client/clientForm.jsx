import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { init } from './clientsActions'
import LabelAndInput from '../common/layout/labelAndInput'
import EmailList from './clientEmail'
class ClientForm extends Component {
    render() {

        const { handleSubmit, readOnly, emails } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput}
                        readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='cpf' component={LabelAndInput} type='number'
                        readOnly={readOnly}
                        label='CPF' cols='12 4' placeholder='Informe o mês' />
                    <Field name='notes' component={LabelAndInput} type='number'
                        readOnly={readOnly}
                        label='Notes' cols='12 4' placeholder='Informe o ano' />
                    <EmailList cols='12 12' list={emails} readOnly={readOnly} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${
                        this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}
ClientForm = reduxForm({
    form: 'clientForm', destroyOnUnmount: false})(ClientForm)
const selector = formValueSelector('clientForm')
const mapStateToProps = state => ({emails: selector(state, 'emails') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientForm)






