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
}));

interface WrapperProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const NavbarWrapper = (props: WrapperProps) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? fade('#fff', 0.5) : 'transparent',
    },
  });
};

const NavBar: React.FC = props => {
  const classes = useStyles();
  return (
    <NavbarWrapper {...props}>
      <AppBar position="fixed" color="transparent">
        <Toolbar color="transparent">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <ButtonLink to="/login" color="inherit">
            Login
          </ButtonLink>
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default NavBar;
