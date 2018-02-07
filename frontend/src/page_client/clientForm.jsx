import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Grid from '../common/layout/grid'
import LabelAndInput from '../common/layout/labelAndInput'
import EmailList from './clientEmail'


class ClientForm extends Component {
    render() {

        const { handleSubmit } = this.props
        console.log(handleSubmit)

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='cpf' component={LabelAndInput} type='text' 
                        label='CPF' cols='12 4' placeholder='Informe o cpf'/>
                    <Field name='notes' component={LabelAndInput}
                        label='Notas' cols='12 4' placeholder='Alguma observação sobre o cliente?' />

                    <EmailList cols='12 6'/>
                </div>
                <div className='box-footer'>

                    <button type='submit' className='btn btn-primary btn-style'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'clientForm' })(ClientForm)