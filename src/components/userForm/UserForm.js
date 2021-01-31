import React, { Component } from 'react';
import './Userform.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

class UserForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Type: '',
      Priority: '',
      Summary: '',
      Description: '',
      Time: '',
      Cost: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  render () {
    return (
<article className="bg-white br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Submit New Story</legend>
              <div className="mt3">
              
                {/* dropdown inputs */}
                <div className="mb-2 w-100">
                  <div>
                    <label htmlFor="type" className="pa1">Type of request:</label>

                    <select className="pointer" name="type" id="type">
                      <option value="enchancement">Enchancement</option>
                      <option value="bugfix">Bug Fix</option>
                      <option value="development">Development</option>
                      <option value="QA">QA</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="priority"  className="pa1">Priority:</label>

                    <select className="pointer" name="priority" id="priority">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

              {/* summary input */}
                <InputGroup className="mb-3 fl w-100">
                 <FormControl
                    placeholder="Summary"
                    aria-label="Summary"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                {/* description input */}
                <InputGroup className="mb-3 fl w-100">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Description</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>

                {/* estimated time input */}
                <InputGroup className="mb-3 fl w-100">
                 <FormControl
                    placeholder="Estimated Time"
                    aria-label="Summary"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

              {/* cost input */}
                <InputGroup className="mb-3 fl w-100">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Amount (to the nearest dollar)" />
                </InputGroup>

                <Button variant='primary' onClick
                className="b ph3 pv2 ma1 input-reset ba b--black bg-navy grow pointer f6 dib br3" 
                >
                Submit
              </Button>
              </div>
            </fieldset>
          </div>
        </main>
      </article>
    );
  }
}

export default UserForm;
