import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Link to='/'>Main</Link>
                <Link to='/new'>New</Link>
            </header>
            <Outlet />
            <footer>2024</footer>
        </div>
    );
};

export default MainLayout;