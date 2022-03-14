// @ts-nocheck
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'


const Layout = () => {
    return (
        <div className='layout'>
            <Navbar />
            <Outlet />
            <footer className='footer'>
                <div className="container">
                    <h5>Footer</h5>
                </div>
            </footer>
        </div>
    )
}

export default Layout
