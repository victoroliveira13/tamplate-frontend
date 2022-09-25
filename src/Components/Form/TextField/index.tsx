import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container, Input } from './styles';

interface IPropsTextField {
  type?: string,
  defaultValue?: string,
  placeholder?: string,
  disabled?: boolean,
  error?: boolean,
  leftIcon?: IconBaseProps,
  rightIcon?: IconBaseProps,
}

const TextField: React.FC<IPropsTextField> = ({
  type,
  defaultValue,
  placeholder,
  disabled,
  error,
  leftIcon,
  rightIcon,
}) => {
  const [Focused, setFocused] = useState(false);
  const toggleFocus = () => {
    setFocused(!Focused);
  };

  return (
    <Container margin={leftIcon ? 'left' : rightIcon ? 'right' : ''} focused={Focused}>
      <>{leftIcon}</>
      <Input
        type={type ? type : 'text'}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        margin={leftIcon ? 'left' : rightIcon ? 'right' : ''}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
      <>{rightIcon}</>
    </Container>
  );
}

export default TextField;