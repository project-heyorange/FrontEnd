import React, { ReactElement } from "react";
import { Route } from "react-router-dom";

const CustomRoutes = ({
  component,
  path,
  // eslint-disable-next-line
  isPrivate = false,
}) => {
  // if (isPrivate && !isAuthenticated()) {
  //   return <Redirect to="/" />;
  // }

  return <Route path={path} element={component} />;
};

export default CustomRoutes;