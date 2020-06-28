import React from 'react';
import { InputBase, makeStyles } from '@material-ui/core';
import ButtonLink from './button-link';

interface Props {
  style?: React.CSSProperties;
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    boxShadow: theme.shadows[0],
    display: 'flex',
  },

  input: {
    flex: 1,
    border: '1px solid #ccc',
    borderRight: 0,
    padding: '0 15px',
    boxShadow: theme.shadows[0],
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
  },

  button: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    boxShadow: theme.shadows[0],
  },
}));

const SubscribeInput: React.FC<Props> = props => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper} {...props}>
      <InputBase placeholder="Subscribe to updates" className={classes.input} />
      <ButtonLink
        to="#"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Subscribe
      </ButtonLink>
    </div>
  );
};

export default SubscribeInput;
