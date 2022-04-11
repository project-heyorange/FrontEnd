import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../components/Login"
import Register from "../components/Register/Register";

// eslint-disable-next-line
const Router = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={"/Login"} element={<Login />} />
        <Route path={"/Register"} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;