import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./components/home/HomePage";
import { Aboutpage } from "./components/about/AboutPage";
import { Header } from "./components/common/header";
import { pageNotFound } from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";

export default function App() {
  return (
    <div className="main-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={pageNotFound} />
      </Switch>
    </div>
  );
}
