import React from "react";
import { Outlet } from "react-router-dom";
import { HomeScreenOptions } from "./homeScreenOptions";

export const HomePage = () => {
  return (
    <>
      {/* Renders the HomeScreenOptions component */}
      <HomeScreenOptions />
      {/* Render child routes */}
      <Outlet />
    </>
  );
};


