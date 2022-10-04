import React, { useEffect, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { MdCheck } from 'react-icons/md';
import TextField from '../TextField';

import { Container } from './styles';

interface IPropsTextField {
  type?: string,
  defaultValue?: string,
  placeholder?: string,
  disabled?: boolean,
  error?: boolean,
}
interface IPropsAutocomplete extends IPropsTextField { 
  backspace: IconBaseProps,
  data: Array<any>,
}

const Autocomplete: React.FC<IPropsAutocomplete> = ({
  type,
  defaultValue,
  placeholder,
  disabled,
  error,
  backspace,
  data,
}) => {
  const [field, setField] = useState<string | any>(defaultValue);
  const handleSetField = (value: string) => {
    setField(value);
    setValueInput('');
  }
  const handleFocusField = () => {
    setActive(!active);
  }
  const handleBksIcon = () => {
    setField('');
  }
  const [active, setActive] = useState(false);
  const [valueInput, setValueInput] = useState<string>('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(!field ? e.target.value : '');
  }
  const handleInputBlur = () => {
    setTimeout(() => setActive(false), 250);
  }
  const [counterSearchResults, setSearchResults] = useState(1);
  useEffect(() => {
    let count = 0;
    data.map(data => (
      (data.value.toLocaleLowerCase()).includes(valueInput.toLocaleLowerCase()) ? count++ : ''
    ))
    setSearchResults(count);
  }, [valueInput]);

  return (
    <>
      <TextField
        type={type}
        defaultValue={field}
        field={field}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        backspace={field ? backspace : null}
        onFocus={() => handleFocusField()}
        onBlur={() => handleInputBlur()}
        onChange={(e) => handleInputChange(e)}
        onClickBks={() => handleBksIcon()}
      />
      {active &&
        <Container>
          <ul>
            {data.map(data => (
              (data.value.toLocaleLowerCase()).includes(valueInput.toLocaleLowerCase()) ?
                <li
                  key={data.id}
                  onClick={() => { handleSetField(data.value) }}
                  className={data.value === field ? 'active' : ''}
                >
                  {data.value}
                  <MdCheck size={18} />
                </li>
                : ''
            ))}
            {counterSearchResults == 0 ? <li className="text-center">Nenhum resultado para "{valueInput}"</li> : ''}
          </ul>
        </Container>
      }
    </>
  );
}

export default Autocomplete;