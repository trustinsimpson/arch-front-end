import React, { Component } from 'react';
import SignIn from './components/signIn/SignIn';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tachyons from 'tachyons';

// Pages and Navigation
import Nav from './components/navigation/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminStories from './components/adminStories/AdminStories';
import Login from './components/signIn/SignIn';
import StoryDetails from './components/adminStories/StoryDetails';
import UserStories from './components/userForm/UserStories';
import UserForm from './components/userForm/UserForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  render() { 
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
              <Switch>
              <Route path="/" component={SignIn} exact/>
              <Route path="/userform" component={UserForm}/>
              <Route path="/userstories" component={UserStories}/>
              <Route path="/adminstories" component={AdminStories}/>
              <Route path="/storydetails" component={StoryDetails}/>
              
              <Route component={Error}/>
            </Switch>
          </div> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
