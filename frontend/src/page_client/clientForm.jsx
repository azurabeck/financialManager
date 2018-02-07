import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'

class ClientForm extends Component {
    render(){

        const { handleSubmit } = this.props
        console.log(handleSubmit)

        return (
            <form role='form'>
                <div className='box-body' onSubmit={handleSubmit}>
                    <Field name='name' component='input' />
                    <Field name='cpf' component='input' />
                    <Field name='emails' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'clientForm'})(ClientForm)