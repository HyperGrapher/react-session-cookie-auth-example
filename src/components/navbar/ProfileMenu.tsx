// @ts-nocheck
import { useNavigate } from 'react-router-dom'
import { useTransition } from 'transition-hook';
import userImg from '../../images/irem_profile.jpeg'
import useNavbarMenuStore, { ProjectNavType } from '../../stores/menu.store';
import { IcCollab, IcLogout, IcMessage, IcPerson, IcSettings } from '../icons';

type PROPS = {
    onClickMenu: (val: ProjectNavType) => void;
    onLogout: () => void;

}
const ProfileMenu: React.FC<PROPS> = ({ onClickMenu, onLogout }) => {


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

            <button onClick={() => {
                onClickMenu("profile")
            }} className='navbar-profile-btn ms-3 img-thumbnail'>
                <img className='rounded' src={userImg} alt="user-img" />
            </button>

            {
                shouldMount ? (<>
                    <div style={{
                        transition: '.15s',
                        transformOrigin: "top left",
                        transform: stage === "leave" ? "scaleY(0.75) translateY(-1.5rem)" : "scaleY(1)",
                        opacity: stage === 'enter' ? 1 : 0
                    }} className="navbar-menu-list fade-in-slide-up">
                        <ul className="list-group text-dark">
                            <li className="list-group-item text-dark"><button onClick={() => onNavigate('/')} className='nav-link text-dark'><IcPerson /> <span className='ps-2'>Profilim</span></button></li>
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
