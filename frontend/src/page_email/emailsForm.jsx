import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import Grid from '../common/layout/grid'
import Line from '../common/layout/lineFull'
import Upload from './emailFileUpload'
import Title from '../common/layout/title'


import 'react-datepicker/dist/react-datepicker.css';

class EmailForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: moment()
        };

        this.hadleChange = this.handleChange.bind(this);
    }

    handleChange (date){
        this.setState({
            startDate: date
          });
    }

    
    render() {        
        return (

            <div className='form_send_email'>
                
                <Title icon='cogs' title='Configurações' />
          
                <Line/>

                <Grid cols='12 12 12'>
                    <Grid cols='4 4 4'>
                        <h5>Data de envio:</h5>
                        <label id='date_picker_icon'>
                            <Grid cols='8 8 8'>
                            <DatePicker
                            id='date_field'
                            icon={'fa fa-cogs'}
                            selected={this.state.startDate}
                            onChange={this.handleChange} /></Grid>
                            <Grid cols='4 4 4' id='date_picker_icon'>
                                <span id='icon-calendar'><i className={`fa fa-cogs`}></i></span>
                            </Grid>
                        </label>
                    </Grid>               
                    <Grid cols='4 4 4'>
                        <h5>Data de envio:</h5>
                        <label id='date_picker_icon'>
                            <Grid cols='8 8 8'>
                            <DatePicker
                            id='date_field'
                            icon={'fa fa-cogs'}
                            selected={this.state.startDate}
                            onChange={this.handleChange} /></Grid>
                            <Grid cols='4 4 4' id='date_picker_icon'>
                                <span id='icon-calendar'><i className={`fa fa-cogs`}></i></span>
                            </Grid>
                        </label>
                    </Grid>
                </Grid>
          
                <Grid cols='12 12 12'>
                    <Upload/>
                </Grid>

            </div>

        )
    }
}

export default EmailForm





