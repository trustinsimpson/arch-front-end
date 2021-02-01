import React, { Component, useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import ReactDOM from 'react-dom';

function Toggle() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <ButtonGroup toggle className="mb-2">
        <ToggleButton
          type="checkbox"
          variant="primary"
          className= "b ph3 pv2 ma1 input-reset ba b--black grow pointer f6 dib br3"
          checked={checked}
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          {checked ? 'Admin' : 'User'}
        </ToggleButton>
      </ButtonGroup>
      </>
      );
}

ReactDOM.render(<Toggle />, document.getElementById('root'));

export default Toggle;