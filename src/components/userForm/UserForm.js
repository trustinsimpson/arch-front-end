import React from "react";
import "./Userform.css";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      complexity: "",
      summary: "",
      description: "",
      time: "",
      cost: 0,
      status: "",
    };
  }

  onSubmitForm = () => {
    fetch("http://localhost:3000/api/v1/stories", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: "",
        summary: this.state.summary,
        description: this.state.description,
        type: this.state.type,
        // cost: this.state.cost,
        complexity: this.state.complexity,
        // estimatedHrs: this.state.time,
        // status: this.state.status 
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
          window.location.href = "../userForm/UserStories.js";
      });
  };

  render() {

    const initialValues = {
      summary: "",
      description: "",
      time: "",
      cost: "",
    };

    const schema = yup.object().shape({
      summary: yup
        .string()
        .required()
        .min(4, "Please enter 4 or more characters."),
      description: yup
        .string()
        .required()
        .min(10, "Please enter 10 or more characters."),
      time: yup.string().required(),
      cost: yup.number().required().positive().integer(),
    });

    return (
      <article className="bg-white br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Submit New Story</legend>
              <Formik initialValues={initialValues} validationSchema={schema}>
                {(formik) => {
                  const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    isValid,
                    dirty,
                  } = formik;
                  return (
                    <Form onSubmit={handleSubmit}>
                      <div className="mt3">
                        {/* dropdown inputs */}
                        <div className="mb-2 w-100">
                          <div>
                            <label htmlFor="type" className="pa1">
                              Type of request:
                            </label>

                            <select className="pointer" name="type" id="type">
                              <option value="enchancement">Enchancement</option>
                              <option value="bugfix">Bug Fix</option>
                              <option value="development">Development</option>
                              <option value="QA">QA</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="complexity" className="pa1">
                              Complexity:
                            </label>

                            <select
                              className="pointer"
                              name="complexity"
                              id="complexity"
                            >
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
                            type="text"
                            name="summary"
                            id="summary"
                            onChange={handleChange}
                            value={values.summary}
                            aria-describedby="basic-addon1"
                            className={
                              errors.summary && touched.summary
                                ? "input-error"
                                : null
                            }
                          />
                          <ErrorMessage
                            name="summary"
                            component="span"
                            className="error"
                          />
                        </InputGroup>

                        {/* description input */}
                        <InputGroup className="mb-3 fl w-100">
                          <InputGroup.Prepend>
                            <InputGroup.Text>Description</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            as="textarea"
                            aria-label="With textarea"
                            type="textarea"
                            name="description"
                            id="description"
                            onChange={handleChange}
                            value={values.description}
                            className={
                              errors.description && touched.description
                                ? "input-error"
                                : null
                            }
                          />
                          <ErrorMessage
                            name="description"
                            component="span"
                            className="error"
                          />
                        </InputGroup>

                        {/* estimated time input */}
                        <InputGroup className="mb-3 fl w-100">
                          <FormControl
                            placeholder="Estimated Time"
                            aria-label="Estimated Time"
                            type="text"
                            name="time"
                            id="time"
                            onChange={handleChange}
                            value={values.time}
                            className={
                              errors.time && touched.time ? "input-error" : null
                            }
                          />
                          <ErrorMessage
                            name="time"
                            component="span"
                            className="error"
                          />
                        </InputGroup>

                        {/* cost input */}
                        <InputGroup className="mb-3 fl w-100">
                          <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl
                            aria-label="Amount (to the nearest dollar)"
                            placeholder="Nearest dollar"
                            type="number"
                            name="cost"
                            id="cost"
                            onChange={handleChange}
                            value={values.cost}
                            className={
                              errors.cost && touched.cost ? "input-error" : null
                            }
                          />
                          <ErrorMessage
                            name="cost"
                            component="span"
                            className="error"
                          />
                        </InputGroup>

                        <Button
                          variant="primary"
                          type="sumbit"
                          className={
                            `b ph3 pv2 ma1 input-reset ba b--black bg-navy grow pointer f6 dib br3
                            ${!(dirty && isValid) ? "disabled-btn" : ""}`}
                          disabled={!(dirty && isValid)}
                          onClick={this.onSubmitForm}
                        >
                          Submit
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
    );
  }
}

export default UserForm;
