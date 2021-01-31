import React, { Component, useState } from 'react';
import Register from './components/register/Register';
import UserForm from './components/userForm/UserForm';
import SignIn from './components/signIn/SignIn';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tachyons from 'tachyons';

// Pages and Navigation
import Navigation from './components/navigation/Navigation';
import Nav from './components/navigation/Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminStories from './components/adminStories/AdminStories';
import Login from './components/signIn/SignIn';
import StoryDetails from './components/adminStories/StoryDetails';

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


  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() { 
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <UserForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit} 
              />
            </div>
          : (
              this.state.route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange}/>
          )
        }
        <BrowserRouter>
<div>
  <Nav />
    <Switch>
     <Route path="/" component={Login} exact/>
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
