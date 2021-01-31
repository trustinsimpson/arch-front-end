import React from 'react';
import Button from 'react-bootstrap/Button';

const Register = ({ onRouteChange }) => {
  return (
    <article className="bg-white br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="text" 
                name="name"  
                id="name" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password" />
            </div>
          </fieldset>
          <div>
           <input className="ma1 pointer" type="checkbox" id="adminCheck">
           </input>
           <label className="b" for="adminCheck">
             Admin?
            </label>
          </div>
            <Button 
              variant="primary" onClick={() => onRouteChange('home')}
              className="b ph3 pv2 ma1 input-reset ba b--black bg-navy grow pointer f6 dib br3"
            >
              Register
            </Button>

        </div>
      </main>
    </article>
  );
}

export default Register;