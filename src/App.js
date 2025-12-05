import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";

import Login from "./auth/Login.jsx";

import AuthAdmin from "./middleware/AuthAdmin";
import Dashboard from "./dashboard/Dashboard.js";
import UserProfile from "./dashboard/UserProfile.tsx";

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

import SkillList from "./skills/Listing.tsx";
import SkillCreate from "./skills/Create.tsx";
import SkillEdit from "./skills/Edit.tsx";

import QualificationList from "./qualifications/Listing.tsx";
import QualificationCreate from "./qualifications/Create.tsx";
import QualificationEdit from "./qualifications/Edit.tsx";

import ViewLogList from "./viewlogs/Listing.tsx";
import ViewLogCreate from "./viewlogs/Create.tsx";
import ViewLogEdit from "./viewlogs/Edit.tsx";

import RoleList from "./roles/Listing.tsx";
import RoleCreate from "./roles/Create.tsx";
import RoleEdit from "./roles/Edit.tsx";

import DesignationList from "./designations/Listing.tsx";
import DesignationCreate from "./designations/Create.tsx";
import DesignationEdit from "./designations/Edit.tsx";

import FeedList from "./feeds/Listing.tsx";
import FeedCreate from "./feeds/Create.tsx";
import FeedEdit from "./feeds/Edit.tsx";

import TagList from "./tags/Listing.tsx";
import TagCreate from "./tags/Create.tsx";
import TagEdit from "./tags/Edit.tsx";

import StickyNoteList from "./stickynotes/Listing.tsx";
import StickyNoteCreate from "./stickynotes/Create.tsx";
import StickyNoteEdit from "./stickynotes/Edit.tsx";

import CarrerJobList from "./career_jobs/Listing.tsx";
import CarrerJobCreate from "./career_jobs/Create.tsx";
import CarrerJobEdit from "./career_jobs/Edit.tsx";

import CareerApplicationList from "./career_applications/Listing.tsx";
import CareerApplicationCreate from "./career_applications/Create.tsx";
import CareerApplicationEdit from "./career_applications/Edit.tsx";

import PackageList from "./packages/Listing.tsx";
import PackageCreate from "./packages/Create.tsx";
import PackageEdit from "./packages/Edit.tsx";

import BannerList from "./banners/Listing.tsx";
import BannerCreate from "./banners/Create.tsx";
import BannerEdit from "./banners/Edit.tsx";

import TestimonialList from "./testimonials/Listing.tsx";
import TestimonialCreate from "./testimonials/Create.tsx";
import TestimonialEdit from "./testimonials/Edit.tsx";

import ModuleList from "./modules/Listing.tsx";
import ModuleCreate from "./modules/Create.tsx";
import ModuleEdit from "./modules/Edit.tsx";

import Order from "./orders/Listing.tsx";

import Setting from "./components/Setting.tsx";
import NotFound from "./components/NotFound";
import ChatBox from "./auth/Chat.js";

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

          <Route path="career_jobs">
            <Route index element={<CarrerJobList />} />
            <Route path="create" element={<CarrerJobCreate />} />
            <Route path="edit/:id" element={<CarrerJobEdit />} />
          </Route>

          <Route path="career_applications">
            <Route index element={<CareerApplicationList />} />
            <Route path="create" element={<CareerApplicationCreate />} />
            <Route path="edit/:id" element={<CareerApplicationEdit />} />
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

          <Route path="skills">
            <Route index element={<SkillList />} />
            <Route path="create" element={<SkillCreate />} />
            <Route path="edit/:id" element={<SkillEdit />} />
          </Route>

          <Route path="packages">
            <Route index element={<PackageList />} />
            <Route path="create" element={<PackageCreate />} />
            <Route path="edit/:id" element={<PackageEdit />} />
          </Route>

          <Route path="qualifications">
            <Route index element={<QualificationList />} />
            <Route path="create" element={<QualificationCreate />} />
            <Route path="edit/:id" element={<QualificationEdit />} />
          </Route>

          <Route path="viewlogs">
            <Route index element={<ViewLogList />} />
            <Route path="create" element={<ViewLogCreate />} />
            <Route path="edit/:id" element={<ViewLogEdit />} />
          </Route>

          <Route path="roles">
            <Route index element={<RoleList />} />
            <Route path="create" element={<RoleCreate />} />
            <Route path="edit/:id" element={<RoleEdit />} />
          </Route>

          <Route path="designations">
            <Route index element={<DesignationList />} />
            <Route path="create" element={<DesignationCreate />} />
            <Route path="edit/:id" element={<DesignationEdit />} />
          </Route>

          <Route path="feeds">
            <Route index element={<FeedList />} />
            <Route path="create" element={<FeedCreate />} />
            <Route path="edit/:id" element={<FeedEdit />} />
          </Route>

          <Route path="tags">
            <Route index element={<TagList />} />
            <Route path="create" element={<TagCreate />} />
            <Route path="edit/:id" element={<TagEdit />} />
          </Route>

          <Route path="testimonials">
            <Route index element={<TestimonialList />} />
            <Route path="create" element={<TestimonialCreate />} />
            <Route path="edit/:id" element={<TestimonialEdit />} />
          </Route>

          <Route path="banners">
            <Route index element={<BannerList />} />
            <Route path="create" element={<BannerCreate />} />
            <Route path="edit/:id" element={<BannerEdit />} />
          </Route>

          <Route path="stickynotes">
            <Route index element={<StickyNoteList />} />
            <Route path="create" element={<StickyNoteCreate />} />
            <Route path="edit/:id" element={<StickyNoteEdit />} />
          </Route>

          <Route path="modules">
            <Route index element={<ModuleList />} />
            <Route path="create" element={<ModuleCreate />} />
            <Route path="edit/:id" element={<ModuleEdit />} />
          </Route>

          <Route path="orders">
            <Route index element={<Order />} />
          </Route> 

          <Route path="chats" element={<ChatBox />} />
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
