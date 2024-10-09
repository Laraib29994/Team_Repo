import React from 'react';
import NavItem from "./NavItem"; // Adjust the path as needed
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavDropdown from './NavDropdown';
import styles from './Nav.module.scss';

const NavBar: React.FC = () => {
    const router = useRouter();
    const getActiveClass = (path: string) => router.pathname === path ? styles.active : '';

    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <NavItem route="/" className={getActiveClass('/')}>Home</NavItem>
                <NavItem route="/about" className={getActiveClass('/about')}>About</NavItem>
                <NavItem route="/contact" className={getActiveClass('/contact')}>Contact</NavItem>
                <NavDropdown />
            </ul>
        </nav>
    );
};

export default NavBar;
