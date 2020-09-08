import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./home/HomePage";
import { Aboutpage } from "./about/AboutPage";
import { Header } from "./common/header";
import { pageNotFound } from "./PageNotFound";
import { CoursePageFunc } from "./courses/CoursesPage";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={Aboutpage} />
        <Route path="/courses" component={CoursePageFunc} />
        <Route component={pageNotFound} />
      </Switch>
    </div>
  );
}
