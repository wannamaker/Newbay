import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  const { currentUser, handleLogout } = props;
    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">NewBay</NavLink>
                <div className="links">
                 <NavLink className="link" to="/login">Login/Signup</NavLink>
                 <NavLink className="link" to="/signout">Signout</NavLink>
                    {/* <button onClick={handleLogout}>Logout</button> */}
                </div>
            </div>
                     <div className="nav2">
                     <NavLink className="link3" to="/stores">My Stores</NavLink>
                      </div>
        </nav>
    )

}

export default Nav