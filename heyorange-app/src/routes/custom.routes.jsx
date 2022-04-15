import React from "react";
import { Route } from "react-router-dom";

const CustomRoutes = ({
  component,
  path,
  isPrivate = false,
}) => {

  return <Route path={path} element={component} />;
};

export default CustomRoutes;