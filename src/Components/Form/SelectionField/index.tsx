import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import TextField from '../TextField';

import { Container } from './styles';

interface IPropsTextField {
  type?: string,
  defaultValue?: string,
  placeholder?: string,
  rightIcon?: IconBaseProps,
  disabled?: boolean,
  error?: boolean,
}
interface IPropsSelectionField extends IPropsTextField {
  data: Array<any>,
}

const SelectionField: React.FC<IPropsSelectionField> = ({
  type,
  defaultValue,
  placeholder,
  disabled,
  error,
  data,
}) => {

  const [field, setField] = useState<string | any>(defaultValue);
  const handleSetField = (value: string) => {
    setField(value);
  }
  const handleInputBlur = () => {
    setTimeout(() => setActive(false), 250);
  }
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  }

  return (
    <>
      <TextField
        type={type}
        defaultValue={field}
        field={field}
        value={field}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={true}
        error={error}
        rightIcon={active ? <MdExpandLess /> : <MdExpandMore />}
        onFocus={() => handleActive()}
        onBlur={() => handleInputBlur()}
      />
      {active &&
        <Container>
          <ul>
            {data.map(data => (
              <li key={data.id} onClick={() => { handleSetField(data.value) }}>{data.value}</li>
            ))}
          </ul>
        </Container>
      }
    </>
  );
}

export default SelectionField;