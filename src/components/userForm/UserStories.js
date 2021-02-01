import React from 'react';
import '../userForm/Userform.css';
import Table from 'react-bootstrap/Table';

const UserStories = () => {
  return (
    <article className="bg-white br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw9 shadow-5 center">
      <main className="pa4 black-80">
        <div>

{/* Fields: Id, summary, description, type, complexity, estimate time, cost */}

          <fieldset id="User Stories" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">User Stories</legend>
            <Table responsive>
              <thead>
                <tr>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <th key={index}>Table heading</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </fieldset>
        </div>
      </main>
    </article>
  );
}

export default UserStories;