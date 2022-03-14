// @ts-nocheck
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IcPlusSmall } from '../icons'
import ProfileMenu from "./ProfileMenu"
import useNavbarMenuStore, { ProjectNavType } from '../../stores/menu.store'
import NotificationMenu from './NotificationMenu'
import MediaQuery from 'react-responsive'

const Navbar = () => {

    const [user, setUser] = useState(false)


    const setNavbarDropdownMenu = useNavbarMenuStore(val => val.setMenu)
    const menu = useNavbarMenuStore(val => val.menu)

    // TODO: stringler const olacak
    const onMenuSelect = (key: ProjectNavType) => {
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

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top navy'>
            <div className='container '>
                <Link onClick={() => setNavbarDropdownMenu(undefined)} className="navbar-brand d-flex" to="/">
                    <img src={ } alt="logos" width="30" height="30" />
                    <h5 className='ms-2'>Market</h5>
                </Link>
                {/* IpadPro ve ustunde Gosterir */}
                <MediaQuery minWidth={1024}>
                    <div className='navbar-middle-links'>
                        <Link onClick={() => setNavbarDropdownMenu(undefined)} to="projeler"
                            className="d-inline nav-link ms-2">
                            <strong className='text-muted'>Projeler</strong>
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
                            user ? <div className='fade-in-slide-up '>
                                <NotificationMenu onClickMenu={onMenuSelect} />
                                <ProfileMenu onClickMenu={onMenuSelect} onLogout={() => setUser(false)} />
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


