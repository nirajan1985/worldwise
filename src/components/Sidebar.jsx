import React from "react";
import AppNav from "./AppNav";
import Logo from "../components/Logo";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}
