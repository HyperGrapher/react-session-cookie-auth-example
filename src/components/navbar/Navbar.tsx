import useNavbarMenuStore, { ProjectNavType } from 'stores/menu.store'
import { authService } from 'services/auth.service'
import NotificationMenu from './NotificationMenu'
import useAuthStore from 'stores/auth.store'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import ProfileMenu from './ProfileMenu'
import { IcPlusSmall } from '../icons'
import Logo from 'images/logo.png'

const Navbar = () => {

    const isAuth = useAuthStore(state => state.isAuth)
    const onLogOut = () => authService.logout()

    const setNavbarDropdownMenu = useNavbarMenuStore(val => val.setMenu)
    const menu = useNavbarMenuStore(val => val.menu)

    // TODO: stringler const olacak
    const onMenuSelect = (key: ProjectNavType) => {
        authService.authCheck()
        switch (key) {
            case "notification":
                if (menu === 'notification') setNavbarDropdownMenu(undefined) // on second click it's open, close it
                else setNavbarDropdownMenu('notification')
                break;
            case "profile":
                if (menu === "profile") setNavbarDropdownMenu(undefined) // on second click it's open, close it
                else setNavbarDropdownMenu('profile');
                break;
            default:
                setNavbarDropdownMenu(undefined)
                break;
        }
    }


    // TODO: fixed-top navbar
    // TODO: Menu linklerini ayri componentlere bol: orta nav links, login-logout, usermenus
    // navbar navbar-expand-md navbar-dark fixed-top bg-dark
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top navy'>
            <div className='container '>
                <Link onClick={() => setNavbarDropdownMenu(undefined)} className="navbar-brand d-flex" to="/">
                    <img src={Logo} alt="logos" width="30" height="30" />
                    <h5 className='ms-2'>Freelancer Market</h5>
                </Link>
                {/* IpadPro ve ustunde Gosterir */}
                <MediaQuery minWidth={1024}>
                    <div className='navbar-middle-links'>
                        <Link onClick={() => setNavbarDropdownMenu(undefined)} to="projeler"
                            className="d-inline nav-link ms-2">
                            <strong className='text-muted'>Uzman Ara</strong>
                        </Link>
                        <Link onClick={() => setNavbarDropdownMenu(undefined)} to="projeler"
                            className="d-inline nav-link ms-2">
                            <strong className='text-muted'>Projeler</strong>
                        </Link>
                        <Link onClick={() => setNavbarDropdownMenu(undefined)} to="projeler"
                            className="d-inline nav-link ms-2">
                            <strong className='text-muted'>Yardim</strong>
                        </Link>
                    </div>
                    <div className="d-flex">
                        <Link onClick={() => setNavbarDropdownMenu(undefined)} to="/"
                            className="btn btn-sm btn-primary me-5 ">
                            <IcPlusSmall />
                            <span className='ms-2 pe-2'>Proje Gönder</span>
                        </Link>

                        {
                            isAuth ? <div className='fade-in-slide-up '>
                                <NotificationMenu onClickMenu={onMenuSelect} />
                                <ProfileMenu onClickMenu={onMenuSelect} onLogout={onLogOut} />
                            </div> : (<>
                                <Link to="projeler"
                                    className="d-inline nav-link ms-2">
                                    <strong className='text-muted'>Üye Ol</strong>
                                </Link>
                                <Link to="login"
                                    className="d-inline nav-link ms-2">
                                    <strong className='text-muted'>Giriş</strong>
                                </Link>
                            </>)

                        }
                    </div>
                </MediaQuery>
            </div>
        </nav>
    )
}

export default Navbar


