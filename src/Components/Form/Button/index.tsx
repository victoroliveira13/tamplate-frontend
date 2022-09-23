import React, { CSSProperties } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface IPropsButton {
  children: string,
  style?: CSSProperties,
  size?: "sm" | "md" | "lg",
  disabled?: boolean,
  full?: boolean,
  variant?: "primary" | "secondary",
  leftIcon?: IconBaseProps,
  rightIcon?: IconBaseProps,
}

const Button: React.FC<IPropsButton> = ({
  children,
  style,
  size,
  disabled,
  full,
  variant,
  leftIcon,
  rightIcon
}) => {
  return (
    <Container
      size={size}
      disabled={disabled}
      full={full}
      variant={variant}
      margin={leftIcon ? 'left' : rightIcon ? 'right' : ''}
      style={style}
    >
      <>
        {leftIcon}
        {children}
        {rightIcon}
      </>
    </Container>
  );
}

export default Button;