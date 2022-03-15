import Navbar from 'components/navbar/Navbar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    return (
        <div className='layout'>
            <Navbar />
            <Outlet />
            <footer className='footer'>
                <div className="container">
                    <h5>Freelance Market</h5>
                </div>
            </footer>
        </div>
    )
}

export default Layout
