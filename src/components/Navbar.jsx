import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [openStaffMgmt, setOpenStaffMgmt] = useState(false);
  const [openUserMgmt, setOpenUserMgmt] = useState(false);
  const [openReportMgmt, setOpenReportMgmt] = useState(false);
  const [openEmployerMgmt, setOpenEmployerMgmt] = useState(false);
  const [openJobMgmt, setOpenJobMgmt] = useState(false);
  const [openBlogNews, setOpenBlogNews] = useState(false);
  const [openUtility, setOpenUtility] = useState(false);
  const [openAdminSetting, setOpenAdminSetting] = useState(false);
  const [openRoles, setOpenRoles] = useState(false);
  const [openFeed, setOpenFeed] = useState(false);

  return (
    <nav className="nav flex-column mt-3">

      {/* SEARCH */}
      <div className="text-center m-4">
        <input className="form-control" placeholder="Enter Search Text" />
      </div>

      {/* DASHBOARD */}
      <NavLink className="nav-link" to="/" end>
        <i className="fa-solid fa-house"></i> Dashboard
      </NavLink>

      {/* STAFF MANAGEMENT */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenStaffMgmt(!openStaffMgmt)}
      >
        <span><i className="fa-regular fa-folder"></i> Staff Management</span>
        <i className={`fa-solid fa-chevron-${openStaffMgmt ? "up" : "down"}`}></i>
      </div>

      {openStaffMgmt && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/staffs">
            <i className="fa-solid fa-user"></i> Staffs
          </NavLink>
        </div>
      )}

      {/* USER MANAGEMENT */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenUserMgmt(!openUserMgmt)}
      >
        <span><i className="fa-regular fa-folder"></i> User Management</span>
        <i className={`fa-solid fa-chevron-${openUserMgmt ? "up" : "down"}`}></i>
      </div>

      {openUserMgmt && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/users">
            <i className="fa-solid fa-users"></i> Users
          </NavLink>
          
        </div>
      )}

      {/* EMPLOYER MANAGEMENT */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenEmployerMgmt(!openEmployerMgmt)}
      >
        <span><i className="fa-regular fa-folder"></i> Employer</span>
        <i className={`fa-solid fa-chevron-${openEmployerMgmt ? "up" : "down"}`}></i>
      </div>

      {openEmployerMgmt && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/employers">
            <i className="fa-solid fa-briefcase"></i> Employers
          </NavLink>
        </div>
      )}

      {/* REPORT MANAGEMENT */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenReportMgmt(!openReportMgmt)}
      >
        <span><i className="fa-regular fa-folder"></i> Report</span>
        <i className={`fa-solid fa-chevron-${openReportMgmt ? "up" : "down"}`}></i>
      </div>

      {openReportMgmt && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/viewlogs">
            <i className="fa-solid fa-list"></i> View Logs
          </NavLink>
          <NavLink className="nav-link" to="/packages">
            <i className="fa-solid fa-file-lines"></i> Package
          </NavLink>  

        </div>
      )}

      {/* JOB MANAGEMENT */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenJobMgmt(!openJobMgmt)}
      >
        <span><i className="fa-regular fa-folder"></i> Job Management</span>
        <i className={`fa-solid fa-chevron-${openJobMgmt ? "up" : "down"}`}></i>
      </div>

      {openJobMgmt && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/jobs"><i className="fa-solid fa-clipboard"></i> Jobs</NavLink>
          <NavLink className="nav-link" to="/categories"><i className="fa-solid fa-layer-group"></i> Categories</NavLink>
          <NavLink className="nav-link" to="/subcategories"><i className="fa-solid fa-list-check"></i> Job Function</NavLink>
          <NavLink className="nav-link" to="/career_jobs"><i className="fa-solid fa-briefcase"></i> Career Jobs</NavLink>
          <NavLink className="nav-link" to="/career_applications"><i className="fa-solid fa-file-circle-check"></i> Career Applications</NavLink>
        </div>
      )}

      {/* BLOG & NEWS */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenBlogNews(!openBlogNews)}
      >
        <span><i className="fa-regular fa-folder"></i> Blog & News</span>
        <i className={`fa-solid fa-chevron-${openBlogNews ? "up" : "down"}`}></i>
      </div>

      {openBlogNews && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/blogs"><i className="fa-solid fa-blog"></i> Blog</NavLink>
          <NavLink className="nav-link" to="/news"><i className="fa-solid fa-newspaper"></i> News</NavLink>
        </div>
      )}

      {/* UTILITY */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenUtility(!openUtility)}
      >
        <span><i className="fa-regular fa-folder"></i> Utility</span>
        <i className={`fa-solid fa-chevron-${openUtility ? "up" : "down"}`}></i>
      </div>

      {openUtility && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/states"><i className="fa-solid fa-map"></i> States</NavLink>
          <NavLink className="nav-link" to="/cities"><i className="fa-solid fa-city"></i> Cities</NavLink>
          <NavLink className="nav-link" to="/skills"><i className="fa-solid fa-lightbulb"></i> Skills</NavLink>
          <NavLink className="nav-link" to="/qualifications"><i className="fa-solid fa-graduation-cap"></i> Qualification</NavLink>
          
        </div>
      )}

      {/* ADMIN SETTING */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenAdminSetting(!openAdminSetting)}
      >
        <span><i className="fa-regular fa-folder"></i> Admin Setting</span>
        <i className={`fa-solid fa-chevron-${openAdminSetting ? "up" : "down"}`}></i>
      </div>

      {openAdminSetting && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/settings"><i className="fa-solid fa-cog"></i> Settings</NavLink>
          <NavLink className="nav-link" to="/modules"><i className="fa-solid fa-puzzle-piece"></i> Admin Modules</NavLink>
        </div>
      )}

      {/* Website SETTING */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenAdminSetting(!openAdminSetting)}
      >
        <span><i className="fa-regular fa-folder"></i> Website Setting</span>
        <i className={`fa-solid fa-chevron-${openAdminSetting ? "up" : "down"}`}></i>
      </div>

      {openAdminSetting && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/banners"><i className="fa-solid fa-image"></i> Banners</NavLink>
          <NavLink className="nav-link" to="/testimonials"><i className="fa-solid fa-comment-dots"></i> Testimonials</NavLink>
        </div>
      )}

      {/* ROLES & DESIGNATION */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenRoles(!openRoles)}
      >
        <span><i className="fa-regular fa-folder"></i> Roles & Designation</span>
        <i className={`fa-solid fa-chevron-${openRoles ? "up" : "down"}`}></i>
      </div>

      {openRoles && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/roles"><i className="fa-solid fa-user-tag"></i> Roles</NavLink>
          <NavLink className="nav-link" to="/designations"><i className="fa-solid fa-id-badge"></i> Designation</NavLink>
        </div>
      )}

      {/* FEED */}
      <div
        className="nav-link d-flex justify-content-between align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => setOpenFeed(!openFeed)}
      >
        <span><i className="fa-regular fa-folder"></i> Feed</span>
        <i className={`fa-solid fa-chevron-${openFeed ? "up" : "down"}`}></i>
      </div>

      {openFeed && (
        <div className="ms-4">
          <NavLink className="nav-link" to="/feeds"><i className="fa-solid fa-user-tag"></i> Post</NavLink>
          <NavLink className="nav-link" to="/tags"><i className="fa-solid fa-tag"></i> Tag</NavLink>
        </div>
      )}

      <NavLink className="nav-link" to="/stickynotes">
        <i className="fa-solid fa-note-sticky"></i> Sticky Notes
      </NavLink>

      <NavLink className="nav-link" to="/chats">
        <i className="fa-solid fa-comments"></i> Chats
      </NavLink>
    </nav>
  );
}

export default Navbar;
