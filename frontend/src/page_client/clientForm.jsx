import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form'
import Grid from '../common/layout/grid'

class ClientForm extends Component {
    render(){

        const { handleSubmit } = this.props
        console.log(handleSubmit)

        return (
            <form role='form'>
                <div className='box-body' onSubmit={handleSubmit}>
                    
                    <Grid cols='6 6 6'>
                        <div className='row'>
                            <Grid cols='3 3 3'><h5 className='h5-form'>Name:</h5></Grid> 
                            <Grid cols='6 6 6'><Field name='name' component='input' /></Grid>
                        </div>
                        <div className='row'>
                            <Grid cols='3 3 3'><h5>CPF:</h5></Grid>  
                            <Grid cols='6 6 6'><Field name='cpf' component='input' /></Grid> 
                        </div>
                    </Grid>
                    <Grid cols='6 6 6'>
                        <Field name='notas' component='input' placeholder='notas' />  
                    </Grid>
                    <Grid cols='12 12 12'>
                        <Field name='emails' component='input' placeholder='email'/>
                    </Grid>

                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary btn-style'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'clientForm'})(ClientForm)