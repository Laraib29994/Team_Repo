import React from "react";
import styles from "./Nav.module.scss";

type Props = {
  children: React.ReactNode;
  title?: string; // Optionally accept a title prop
};

const NavBar = ({ children, title }: Props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>{title || "Your Website Title"}</div> {/* Add title here */}
      {children}
    </nav>
  );
};

export default NavBar;
