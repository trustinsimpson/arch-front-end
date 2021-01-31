import React from 'react';
import '../userForm/Userform.css';
import { Button, InputGroup, FormControl, Table } from 'react-bootstrap';

const StoryDetails = (props) => {
    return (
      <article className="bg-white br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw9 shadow-5 center">
        <main className="pa4 black-80">
          <div>

{/* Fields: summary, description, type, complexity, estimate time, cost, Status */}

            <fieldset id="User Stories" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Story #{props.ID} </legend>
              <h5>Type:</h5>
              <p>{props.type}</p>
              <h5>Priority:</h5>
              <p>{props.priority}</p>
              <h5>Summary:</h5>
              <p>{props.summary}</p>
              <h5>Description:</h5>
              <p>{props.description}</p>
              <h5>Estimated Time For Completion:</h5>
              <p>{props.time}</p>
              <h5>Cost:</h5>
              <p>{props.cost}</p>
              <h5>Status:</h5>
              <p>{props.status}</p>
              <Button variant="success" className="pa1 ma1">
                Accept
              </Button>
              <Button variant="danger" className="pa1 ma1">
                Decline
              </Button>
            </fieldset>
          </div>
        </main>
      </article>
    );
  }

export default StoryDetails;