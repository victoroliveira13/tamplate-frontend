import React, { ChangeEventHandler, FocusEventHandler, MouseEventHandler, useState } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container, Input } from './styles';

interface IPropsTextField {
  type?: string,
  defaultValue?: string,
  value?: string,
  field?: string,
  placeholder?: string,
  disabled?: boolean,
  error?: boolean,
  leftIcon?: IconBaseProps,
  rightIcon?: IconBaseProps,
  backspace?: IconBaseProps | null,
  onClickBks?: MouseEventHandler<any> | undefined,
  onFocus?: FocusEventHandler<any> | undefined,
  onBlur?: FocusEventHandler<any> | undefined,
  onChange?: ChangeEventHandler<any> | undefined,
}

const TextField: React.FC<IPropsTextField> = ({
  type,
  defaultValue,
  value,
  field,
  placeholder,
  disabled,
  error,
  leftIcon,
  rightIcon,
  backspace,
  onClickBks,
  onFocus,
  onBlur,
  onChange,
}) => {
  const [Focused, setFocused] = useState(false);
  const toggleFocus = () => {
    setFocused(!Focused);
  };

  return (
    <Container margin={(leftIcon || backspace) ? 'left' : rightIcon ? 'right' : ''} focused={Focused} onFocus={onFocus} onBlur={onBlur}>
      <>{leftIcon}</>
      <div className="bkspace" onClick={onClickBks}>
        <>{backspace}</>
      </div>
      <Input
        type={type ? type : 'text'}
        defaultValue={defaultValue}
        value={field? field : value}
        readOnly={false}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        margin={(leftIcon || backspace) ? 'left' : rightIcon ? 'right' : ''}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        onChange={onChange}
      />
      <>{rightIcon}</>
    </Container>
  );
}

export default TextField;