import { createMuiTheme, colors } from '@material-ui/core';

const theme = createMuiTheme({});

theme.overrides.MuiGrid = {
  item: {
    paddingLeft: '15px',
    paddingRight: '15px',
  },
};

export default theme;
