import React from "react";
import Button from "react-bootstrap/Button";
import Toggle from "../checkButton/CheckButton";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid Email";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password too short";
  }
  return errors;
};

const submitForm = (values) => {
  console.log(values);
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isAdmin: false,
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3000/api/v1/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        isAdmin: document.querySelector("#isAdmin").querySelector("input")
          .checked,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.role === "Admin") {
          window.location.href = "../adminStories/AdminStories.js";
        } else {
          window.location.href = "../userForm/UserForm.js";
        }
      });
  };

  render() {
    let initialValues = {
      email: "",
      password: "",
    };
    return (
      <div>
        <article className="bg-white br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <Formik
                  initialValues={initialValues}
                  validate={validate}
                  onSubmit={submitForm}
                >
                  {(formik) => {
                    const {
                      values,
                      handleChange,
                      handleSubmit,
                      errors,
                      touched,
                      handleBlur,
                      isValid,
                      dirty,
                    } = formik;
                    return (
                      <Form onSubmit={handleSubmit}>
                        <div className="mt3 form-row">
                          <label className="db fw6 lh-copy f6" htmlFor="email">
                            Email
                          </label>
                          <Field
                            type="email"
                            id="email"
                            name="email"
                            value={values.emaail}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`pa2 ba black w-100 ${
                              errors.email && touched.email
                                ? "input-error"
                                : null
                            }`}
                          />
                          {errors.email && touched.email && (
                            <span className="error">{errors.email}</span>
                          )}
                        </div>
                        <div className="mv3 form-row">
                          <label
                            className="db fw6 lh-copy f6"
                            htmlFor="password"
                          >
                            Password
                          </label>
                          <Field
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`pa2 ba black w-100 ${
                              errors.password && touched.password
                                ? "input-error"
                                : null
                            }`}
                            type="password"
                            id="password"
                          />
                          {errors.password && touched.password && (
                            <span className="error">{errors.password}</span>
                          )}
                        </div>
                        <div>
                          <Toggle
                            name="isAdmin"
                            id="isAdmin"
                            onClick={this.isAdmin}
                          />
                        </div>
                        <div>
                          <Button
                            variant="primary"
                            type="submit"
                            className={`b ph3 pv2 ma1 input-reset ba b--black bg-navy grow pointer f6 dib br3 ${
                              dirty && isValid ? "" : "disabled-btn"
                            }`}
                            disabled={!(dirty && isValid)}
                            onClick={this.onSubmitSignIn}
                          >
                            Sign In
                          </Button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </fieldset>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default SignIn;
