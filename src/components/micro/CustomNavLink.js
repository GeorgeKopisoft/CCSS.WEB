import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ children, url, activeClass, match }) => {
    return (
        <Fragment>
            <NavLink className="transition-all nav-link border-nav text-center"
                activeClassName={`${activeClass} navbarActive`}
                isActive={(match) => {
                    if (!match) return false;
                    if (match.isExact) return true;
                }}
                to={url}>
                {children}
            </NavLink>
        </Fragment>
    )
}

export default CustomNavLink;
