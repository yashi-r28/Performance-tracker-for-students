import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Homepage.css"
import ninja from "../../assets/codingninjas.jpeg"
import code from "../../assets/codechef.jpeg"
import dash from "../../assets/Dashboard.jpeg"
import Profile from "../../assets/ProfileIcon.png"
import setting from "../../assets/setting.png"
import notification from "../../assets/notification.jpg"
import linkedin from "../../assets/linkedin.jpg"
import github from "../../assets/github.jpg"
import GFG from "../../assets/gfg.png"

function HomePage() {
  const navigate = useNavigate();
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      <header>
        <div className="header-content">

        <div className="menu-icon" onClick={toggleSidebar}>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </div>

          <img src={dash} alt="Dashboard Icon" className="dashboard-icon" />
          <img src={setting} alt="Setting Icon" className="settings-icon" />

          <div className="tabs">
            <button className="tab" onClick={() => navigate("/todo")}>To do (8)</button>
            <button className="tab" onClick={() => navigate("/in-progress")}>In progress (2)</button>
            <button className="tab" onClick={() => navigate("/hold")}>Hold (3)</button>
            <button className="tab" onClick={() => navigate("/completed")}>Completed (0)</button>
          </div>

          {/* Profile Dropdown */}
          <div className="profile-dropdown">
            <label htmlFor="dropdown-toggle" className="profile-image-container">
              <img src={Profile} alt="Profile Icon" className="profile-image" />
            </label>
            <input type="checkbox" id="dropdown-toggle" className="dropdown-toggle" />
            <div className="dropdown-menu">
                <Link to="/login" className="dropdown-link">Login</Link>
                <Link to="/signup" className="dropdown-link">SignUp</Link>
            </div>
          </div>

          <img src={notification} alt="Notification Icon" className="notification-image" />
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">To-Do's</Link></li>
          <li><Link to="/in-progress">In Progress</Link></li>
          <li><Link to="/hold">On Hold</Link></li>
          <li><Link to="/completed">Completed</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </div>

      {/* Main Section */}
      <main>
            <div className="task">
            <img src={GFG} alt="GFG Logo" className="logo" />
            <input type="range" min="0" max="100" defaultValue="50" className="slider" />
          </div>
          <div className="task">
            <img src={ninja} alt="Coding Ninjas Logo" className="logo" />
            <input type="range" min="0" max="100" defaultValue="50" className="slider" />
          </div>
          <div className="task">
            <img src={code} alt="Codechef Logo" className="logo" />
            <input type="range" min="0" max="100" defaultValue="50" className="slider" />
          </div>
          <div className="task">
            <img src={github} alt="GitHub Logo" className="logo" />
            <input type="range" min="0" max="100" defaultValue="50" className="slider" />
          </div>
      </main>

      {/* Footer Section */}
      <footer>
        <div className="social-media">
          <img src={github} alt="GitHub" className="social-icon" />
          <img src={GFG} alt="GFG" className="social-icon" />
          <img src={code} alt="Codechef" className="social-icon" />
          <img src={ninja} alt="Coding Ninja" className="social-icon" />
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </div>
      </footer>
    </div>
  );
}

export default HomePage;