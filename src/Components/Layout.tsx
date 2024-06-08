import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";

function Layout() {
    const location = useLocation();
    const noLayoutRoutes = ['/login'];
    const showLayout = !noLayoutRoutes.includes(location.pathname);

    return (
        <div>
            {showLayout && (
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/Overview'}>Overview</Link>
                    <Link to={'/input'}>Input</Link>
                </nav>
            )}
            <Outlet/>
        </div>
    );
}

export default Layout;
