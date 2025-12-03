import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";

import UserList from "./users/Listing.tsx";
import UserCreate from "./users/Create.tsx"
import UserEdit from "./users/Edit.tsx";

import StaffList from "./staffs/Listing.tsx";
import StaffCreate from "./staffs/Create.tsx";
import StaffEdit from "./staffs/Edit.tsx";

import EmployerList from "./employers/Listing.tsx";
import EmployerCreate from "./employers/Create.tsx";
import EmployerEdit from "./employers/Edit.tsx";

import JobList from "./jobs/Listing.tsx";
import JobCreate from "./jobs/Create.tsx";
import JobEdit from "./jobs/Edit.tsx";

import BlogList from "./blogs/Listing.tsx";
import BlogCreate from "./blogs/Create.tsx";
import BlogEdit from "./blogs/Edit.tsx";

import NewsList from "./news/Listing.tsx";
import NewsCreate from "./news/Create.tsx";
import NewsEdit from "./news/Edit.tsx";

import StateList from "./states/Listing.tsx";
import StateCreate from "./states/Create.tsx";
import StateEdit from "./states/Edit.tsx";

import CityList from "./cities/Listing.tsx";
import CityCreate from "./cities/Create.tsx";
import CityEdit from "./cities/Edit.tsx";

import CategoryList from "./categories/Listing.tsx";
import CategoryCreate from "./categories/Create.tsx";
import CategoryEdit from "./categories/Edit.tsx";

import SubCategoryList from "./subcategories/Listing.tsx";
import SubCategoryCreate from "./subcategories/Create.tsx";
import SubCategoryEdit from "./subcategories/Edit.tsx";

import Setting from "./components/Setting";
import AuthAdmin from "./middleware/AuthAdmin";
import Order from "./orders/Listing.tsx";
import NotFound from "./components/NotFound";
import Dashboard from "./dashboard/Dashboard.js";
import UserProfile from "./dashboard/UserProfile.tsx";
import ChatBox from "./auth/Chat.js";
import Login from "./auth/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
              <AuthAdmin>
                <AdminLayout />
              </AuthAdmin>
            }
          >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="users">
            <Route index element={<UserList />} />
            <Route path="create" element={<UserCreate />} />
            <Route path="edit/:id" element={<UserEdit />} />
          </Route>

          <Route path="staffs">
            <Route index element={<StaffList />} />
            <Route path="create" element={<StaffCreate />} />
            <Route path="edit/:id" element={<StaffEdit />} />
          </Route>

          <Route path="employers">
            <Route index element={<EmployerList />} />
            <Route path="create" element={<EmployerCreate />} />
            <Route path="edit/:id" element={<EmployerEdit />} />
          </Route>

          <Route path="jobs">
            <Route index element={<JobList />} />
            <Route path="create" element={<JobCreate />} />
            <Route path="edit/:id" element={<JobEdit />} />
          </Route>

          <Route path="blogs">
            <Route index element={<BlogList />} />
            <Route path="create" element={<BlogCreate />} />
            <Route path="edit/:id" element={<BlogEdit />} />
          </Route>

          <Route path="news">
            <Route index element={<NewsList />} />
            <Route path="create" element={<NewsCreate />} />
            <Route path="edit/:id" element={<NewsEdit />} />
          </Route>

          <Route path="states">
            <Route index element={<StateList />} />
            <Route path="create" element={<StateCreate />} />
            <Route path="edit/:id" element={<StateEdit />} />
          </Route>

          <Route path="cities">
            <Route index element={<CityList />} />
            <Route path="create" element={<CityCreate />} />
            <Route path="edit/:id" element={<CityEdit />} />
          </Route>

          <Route path="categories">
            <Route index element={<CategoryList />} />
            <Route path="create" element={<CategoryCreate />} />
            <Route path="edit/:id" element={<CategoryEdit />} />
          </Route>

          <Route path="subcategories">
            <Route index element={<SubCategoryList />} />
            <Route path="create" element={<SubCategoryCreate />} />
            <Route path="edit/:id" element={<SubCategoryEdit />} />
          </Route>

          <Route path="chats" element={<ChatBox />} />
          <Route path="settings" element={<Setting />} />
          <Route path="orders" element={<Order />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
