import React from 'react'

import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

const CustomerInputView = ({ label, value, onChange, classes }) => (
  <TextField
    id={label}
    label={label}
    className={classes.textField}
    value={value}
    onChange={onChange}
    margin='normal'
  />
)

export default withStyles(styles)(CustomerInputView)
