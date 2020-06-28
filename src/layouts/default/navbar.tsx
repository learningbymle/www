import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Theme,
  useScrollTrigger,
  fade,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonLink from '../../components/button-link';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  top: {
    backgroundColor: 'transparent',
    color: theme.palette.getContrastText('#000'),
  },
  scrollTriggered: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

interface WrapperProps {
  window?: () => Window;
  children: React.ReactElement;
}

const NavbarWrapper = (props: WrapperProps) => {
  const classes = useStyles();
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: trigger ? classes.scrollTriggered : classes.top,
  });
};

const NavBar: React.FC = props => {
  return (
    <NavbarWrapper {...props}>
      <AppBar position="fixed" color="transparent">
        <Toolbar color="transparent">
          <div style={{ flexGrow: 1 }} />
          <ButtonLink to="/covid-19" color="inherit">
            COVID-19
          </ButtonLink>
          <ButtonLink to="/blog" color="inherit">
            Blog
          </ButtonLink>
          <ButtonLink to="/about" color="inherit">
            About
          </ButtonLink>
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default NavBar;
