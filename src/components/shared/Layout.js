import React, { Fragment } from 'react';
import NavigateBar from '../macro/NavigateBar';
import Footer from '../macro/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/common.scss';

const Layout = ({ children }) => {
    return (
        <Fragment>
            <NavigateBar />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout;
