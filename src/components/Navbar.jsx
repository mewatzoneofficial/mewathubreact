import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav flex-column mt-3">
      <div className="text-center mb-4">
        <img
          src={"/assets/images/logo.png"}
          alt="App Logo"
          style={{ width: "130px", objectFit: "contain" }}
        />
      </div>

      {/* Menu Items */}
      <NavLink className="nav-link" to="/" end>
        <i className="fa-solid fa-house"></i> Dashboard
      </NavLink>

      <NavLink className="nav-link" to="/staffs">
        <i className="fa-solid fa-user"></i> Staffs
      </NavLink>

      <NavLink className="nav-link" to="/users">
        <i className="fa-solid fa-users"></i> Users
      </NavLink>

      <NavLink className="nav-link" to="/employers">
        <i className="fa-solid fa-briefcase"></i> Employer
      </NavLink>

      <NavLink className="nav-link" to="/jobs">
        <i className="fa-solid fa-clipboard-list"></i> Job
      </NavLink>

      <NavLink className="nav-link" to="/categories">
        <i className="fa-solid fa-layer-group"></i> Category
      </NavLink>

      <NavLink className="nav-link" to="/subcategories">
        <i className="fa-solid fa-list-check"></i> Job Function
      </NavLink>

      <NavLink className="nav-link" to="/blogs">
        <i className="fa-solid fa-blog"></i> Blog
      </NavLink>

      <NavLink className="nav-link" to="/news">
        <i className="fa-solid fa-newspaper"></i> News
      </NavLink>

      <NavLink className="nav-link" to="/states">
        <i className="fa-solid fa-map"></i> State
      </NavLink>

      <NavLink className="nav-link" to="/cities">
        <i className="fa-solid fa-city"></i> City
      </NavLink>

      <NavLink className="nav-link" to="/settings">
        <i className="fa-solid fa-cog"></i> Settings
      </NavLink>

      <NavLink className="nav-link" to="/chats">
        <i className="fa-solid fa-comments"></i> Chats
      </NavLink>

    </nav>
  );
}

export default Navbar;
