import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Nav = () => {
    return (
       <div style={{display: 'flex', justifyContent: 'flex-end'}}>
          <NavLink className='f3 link dim black underline pa3 pointer' to='/'>SignOut</NavLink>
       </div>
    );
}
 
export default Nav;