import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import topic from "./Icons/topic.svg";
import moduleQuiz from "./Icons/moduleQuiz.svg";
import assignment from "./Icons/assignment.svg";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <NavLink className="sidebar-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="sidebar-item">
            <NavLink className="sidebar-link" to="/modules">
                Modules
            </NavLink>
            <ul className="sub-nav">
                <li>
                <NavLink className="sub-link" to="/modules/topic">
                <img src={topic} alt="Topic" />
                </NavLink>
                </li>
                <li>
                <NavLink className="sub-link" to="/modules/quiz">
                <img src={moduleQuiz} alt="Quiz" />
                </NavLink>
                </li>
                <li>
                <NavLink className="sub-link" to="/modules/assignment">
                <img src={assignment} alt="Assignment" />
                </NavLink>
                </li>
            </ul>
        </li>
        <li className="sidebar-item">
          <NavLink className="sidebar-link" to="/instructor">
            Instructor
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;