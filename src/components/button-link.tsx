import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import Link, { LinkProps } from './link';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type ButtonLinkProps = Omit<LinkProps & ButtonProps, 'ref'>;

const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant,
  startIcon,
  endIcon,
  ...props
}) => (
  <Link {...props}>
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    />
  </Link>
);

export default ButtonLink;
