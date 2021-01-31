import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

function Toggle() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ];

  return (
    <>
      <ButtonGroup toggle className="mb-2">
        <ToggleButton
          type="checkbox"
          variant="secondary"
          size="sm"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Accept
        </ToggleButton>
      </ButtonGroup>
    </>
  );
}

export default Toggle;