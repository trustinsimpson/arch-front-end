import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Nav = () => {
    return (
       <div>
          <NavLink to="/">SignIn</NavLink>
          <NavLink to="/adminstories">AdminStories</NavLink>
          <NavLink to="/storydetails">StoryDetails</NavLink>
       </div>
    );
}
 
export default Nav;