import React from 'react';

import { Container } from './styles';

interface IPropsLinkButton {
  to: string,
  label: string,
  leftIcon?: any,
  variant?: 'primary' | 'secondary' | 'tertiary',
}

const LinkButton: React.FC<IPropsLinkButton> = ({
  to,
  label,
  leftIcon,
  variant,
}) => {
  return (
    <Container to={to} variant={variant}>
      <>{leftIcon}</>
      <span>{label}</span>
    </Container>
  );
}

export default LinkButton;