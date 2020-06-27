import React from 'react';
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  makeStyles,
} from '@material-ui/core';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface LinkProps
  extends Omit<Omit<MuiLinkProps & GatsbyLinkProps<{}>, 'ref'>, 'variant'> {
  trackingCode?: string;
}

const useStyles = makeStyles(() => ({
  normalizeLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Link: React.FC<LinkProps> = ({ className, to, ...props }) => {
  const classes = useStyles();
  const isInternal = /^\/(?!\/)/.test(to);

  const onClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Track hubspot events
    if (props.trackingCode && (window as any).analytics) {
      (window as any).analytics.track('Button Clicked', {
        code: props.trackingCode,
      });
    }

    if (props.onClick) {
      return props.onClick(event);
    }
  };

  return isInternal ? (
    <MuiLink
      component={GatsbyLink}
      to={to}
      className={`${className} ${classes.normalizeLink}`}
      onClick={onClick}
      {...props}
    />
  ) : (
    <MuiLink
      component="a"
      href={to}
      target="_blank"
      className={`${className} ${classes.normalizeLink}`}
      onClick={onClick}
      {...props}
    />
  );
};

export default Link;
