import React, { Fragment } from 'react'

import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const DatePick = ({ value, onChange }) => {

    const handleDateChange = (date) => {
        onChange(date);
    }

    const useStyles = makeStyles({
        root: {
            border: "solid 1px #61dafb",
            borderRadius: 3,
            color: 'white !important',
            padding: "1rem",
        },
    });

    return (
        <Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        format="dd/MM/yyyy"
                        value={value}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        className={useStyles().root}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </Fragment>
    )
}

export default DatePick;
