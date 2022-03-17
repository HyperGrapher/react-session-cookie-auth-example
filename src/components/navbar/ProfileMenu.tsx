import { IcCollab, IcLogout, IcMessage, IcPerson, IcSettings } from '../icons';
import useNavbarMenuStore, { ProjectNavType } from 'stores/menu.store';
import { useTransition } from 'transition-hook';
import { useNavigate } from 'react-router-dom'
import userImg from 'images/ben.jpg'

type PROPS = {
    onClickMenu: (val: ProjectNavType) => void;
    onLogout: () => void;
}

const ProfileMenu: React.FC<PROPS> = ({ onClickMenu, onLogout }) => {

    // useEffect(() => console.log('📢 ProfileMenu render'));

    // ! useNavigate causes re-render on every route change
    const navigate = useNavigate();


    const menu = useNavbarMenuStore(val => val.menu)
    const { stage, shouldMount } = useTransition(menu === "profile", 300) // (state, timeout)

    const setNavbarDropdownMenu = useNavbarMenuStore(val => val.setMenu)


    const onNavigate = (path: string) => {
        onClickMenu("profile")
        navigate(path);
    }

    const onUserLogout = () => {
        setNavbarDropdownMenu(undefined);
        onLogout();
        navigate('/');
    }

    return (
        <div className='navbar-menu-parent d-inline '>

            <button onClick={() => onClickMenu("profile")} className='navbar-profile-btn ms-3 img-thumbnail'>
                <img className='rounded' src={userImg} alt="user-img" />
            </button>
            {
                shouldMount ? (<>
                    <div style={{
                        transition: '.15s',
                        opacity: stage === 'enter' ? 1 : 0
                    }} className="navbar-menu-list fade-in-slide-up">
                        <ul className="list-group text-dark">
                            <li className="list-group-item text-dark"><button onClick={() => onNavigate('profile')} className='nav-link text-dark'><IcPerson /> <span className='ps-2'>Profilim</span></button></li>
                            <li className="list-group-item text-dark"><button onClick={() => onNavigate('/')} className='nav-link text-dark'><IcMessage /> <span className='ps-2'>Mesajlarim</span></button></li>
                            <li className="list-group-item text-dark"><button onClick={() => onNavigate('/')} className='nav-link text-dark'><IcCollab /> <span className='ps-2'>Projelerim</span></button></li>
                            <li className="list-group-item text-dark"><button onClick={() => onNavigate('/')} className='nav-link text-dark'><IcSettings /> <span className='ps-2'>Ayarlarim</span></button></li>
                            <li className="list-group-item"><button onClick={() => onUserLogout()} className='nav-link text-dark'><IcLogout /><span className='ps-2'>Cikis yap</span></button></li>
                        </ul>
                    </div>

                </>) : (null)
            }
        </div>
    )
}

export default ProfileMenu
