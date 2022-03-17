import Footer from 'components/footer/Footer'
import Navbar from 'components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const RootContainer: React.FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootContainer
