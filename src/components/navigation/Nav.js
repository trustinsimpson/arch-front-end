import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Nav = () => {
    return (
       <div>
          <NavLink className="pa1" to="/">SignIn</NavLink>
          <NavLink className="pa1" to="/adminstories">AdminStories</NavLink>
          <NavLink className="pa1" to="/storydetails">StoryDetails</NavLink>
          <NavLink className="pa1" to="/userstories">UserStories</NavLink>
       </div>
    );
}
 
export default Nav;