import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";
import { AdminLayout } from "./layouts_admin";
// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import ListOfElections from "./views/ListOfElections";
import Errors from "./views/Errors";
import Home from './components/home.component';
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Login from "./components/login.component";
import Registre from "./components/registre.component";
import ListOfPositions from "./views/ListOfPositions";
import ListOfCandidates from "./views/ListOfCandidates";
import AdminDashboard from "./views/AdminDashboard";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: Home 
  },
  {
    path: "/login",
    exact: true,
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/registre",
    exact: true,
    layout: DefaultLayout,
    component: Registre
  },
  {
    path: "/voter_dashboard",
    exact: true,
    layout: DefaultLayout,
    component: ListOfElections
  },
  {
    path: "/admin_dashboard",
    exact: true,
    layout: AdminLayout,
    component: AdminDashboard
  },
 
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/list-of-elections",
    layout: DefaultLayout,
    component: ListOfElections
  },
  {
    path: "/list-of-positions",
    layout: DefaultLayout,
    component: ListOfPositions
  },
  {
    path: "/list-of-candidates",
    layout: DefaultLayout,
    component: ListOfCandidates
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
