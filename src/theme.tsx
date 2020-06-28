import { createMuiTheme, colors } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5be5f5',
    },
    secondary: {
      main: '#ffabdd',
    },
  },

  typography: {
    h1: {
      fontSize: '4.5rem',
    },

    h2: {
      fontSize: '4rem',
    },

    h3: {
      fontSize: '3rem',
    },

    h4: {
      fontSize: '2rem',
    },

    h5: {
      fontSize: '1.5rem',
    },
  },
});

theme.overrides.MuiGrid = {
  item: {
    paddingLeft: '15px',
    paddingRight: '15px',
  },
};

export default theme;
