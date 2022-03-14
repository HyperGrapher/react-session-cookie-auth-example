import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import useNavbarMenuStore, { ProjectNavType } from '../../stores/menu.store';
import { IcBell, IcCollab, IcLogout, IcMessage, IcSettings } from '../icons';
import IconBtn from '../_reusables/IconBtn';
import NotificationItem from './NotificationItem';


type PROPS = {
    onClickMenu: (val: ProjectNavType) => void;
}

const NotificationMenu: React.FC<PROPS> = ({ onClickMenu }) => {

    const navigate = useNavigate();

    const menu = useNavbarMenuStore(val => val.menu)
    const setMenu = useNavbarMenuStore(val => val.setMenu)

    useEffect(() => {


    }, [])



    const onNavigate = (path: string) => {
        onClickMenu('notification')
        navigate(path);
    }

    return (
        <div className='navbar-menu-parent d-inline '>

            <IconBtn notificationAlert={true} onClick={() => onClickMenu('notification')}><IcBell /></IconBtn>


            {
                menu === "notification" ? (<>
                    <div className="navbar-menu-list fade-in-slide-up">
                        <ul className="list-group text-dark">
                            <li className="list-group-item text-dark"><NotificationItem name='Ahmet K.' onClick={() => onNavigate('/')} > <span className='ps-2'>kbkgs</span></NotificationItem></li>
                            <li className="list-group-item text-dark"><button onClick={() => onNavigate('/')} className='nav-link text-dark'><IcMessage /> <span className='ps-2'>Mesajlarim</span></button></li>
                            <li className="list-group-item text-dark"><button onClick={() => onNavigate('/')} className='nav-link text-dark'><IcCollab /> <span className='ps-2'>İş Birliklerim</span></button></li>
                            <li className="list-group-item text-dark"><button onClick={() => onNavigate('/')} className='nav-link text-dark'><IcSettings /> <span className='ps-2'>Ayarlarim</span></button></li>
                            <li className="list-group-item"><button onClick={() => { }} className='nav-link text-dark'><IcLogout /><span className='ps-2'>Cikis yap</span></button></li>
                        </ul>
                    </div>

                </>) : (null)
            }
        </div>
    )
}

export default NotificationMenu
