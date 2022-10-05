import React, { MouseEventHandler } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface IPropsIconButton {
  icon?: IconBaseProps,
  variant?: 'primary' | 'secondary' | 'tertiary',
  size?: 'sm' | 'md' | 'lg',
  disabled?: boolean,
  outlined?: boolean,
  loading?: boolean,
  onClick?: MouseEventHandler<any> | undefined,
}

const IconButton: React.FC<IPropsIconButton> = ({
  icon,
  size,
  variant,
  disabled,
  outlined,
  loading,
  onClick,
}) => {
  return (
    <Container
      size={size}
      variant={variant}
      disabled={disabled}
      outlined={outlined}
      onClick={onClick}
    >
      <>{!loading ? icon : <div className="loader" />}</>
    </Container>
  );
}

export default IconButton;