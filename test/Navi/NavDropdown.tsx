import React from 'react';
import NavItem from './NavItem';
import styles from './Nav.module.scss';

const NavDropdown: React.FC = () => {
    return (
        <div className={styles.dropdown}>
            <NavItem dropdown>
                <div className={styles.dropbtn}>Articles</div>
                <div className={styles.dropdownContent}>
                    <NavItem route="http://localhost:8082/api/articles">
                        New Article
                    </NavItem>
                    <NavItem route="http://localhost:8082/api/Articles">
                        Article List
                    </NavItem>
                </div>
            </NavItem>
        </div>
    );
};

export default NavDropdown;
