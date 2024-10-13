import React from "react";
import Link from "next/link"; // Import the Link component
import styles from "./Nav.module.scss";

type Props = {
  route?: string;
  children: React.ReactNode;
  end?: boolean;
  dropdown?: boolean;
  onClick?: boolean | (() => void);
  style?: React.CSSProperties;
};

const NavItem = ({ children, route, end, dropdown, onClick, style }: Props) => {
  return (
    <div
      style={style}
      className={`${route || onClick ? styles.clickable : styles.navitem}${end ? ` ${styles.end}` : ""}${dropdown ? ` ${styles.dropdown}` : ""}`}
      onClick={typeof onClick === "function" ? onClick : undefined} // Keep onClick for non-link scenarios
    >
      {route ? (
        <Link href={route} style={{ textDecoration: "none", color: "inherit" }}>
          {children}
        </Link>
      ) : (
        children // Render children directly if there's no route
      )}
    </div>
  );
};

export default NavItem; // Ensure this is a default export
