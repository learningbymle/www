import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

interface Props extends React.PropsWithChildren<{}> {
  ref?: React.LegacyRef;
  before?: React.ReactNode;
  after?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 80,
    paddingBottom: 80,
  },
}));

const LandingPageSection: React.FC<Props> = ({
  before,
  after,
  children,
  ref,
  ...props
}) => {
  const classes = useStyles();
  return (
    <section ref={ref} {...props}>
      {before}
      <Container className={classes.container}>{children}</Container>
      {after}
    </section>
  );
};

export default LandingPageSection;
