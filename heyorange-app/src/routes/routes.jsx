import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Agendar from "../pages/Agendar";
import Feed from "../pages/Feed/Feed";
import Mentores from "../pages/Mentores";
import Agendado from "../pages/Agendado/Agendado";

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
        <Route path={"/"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/feed"} element={<Feed />} />
        <Route path={"/mentores"} element={<Mentores/>} />
        <Route path={"/agendar"} element={<Agendar/>} />
        <Route path={"/mentoria"} element={<Agendado/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;