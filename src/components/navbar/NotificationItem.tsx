import prof from 'images/ben.jpg'

type PROPS = {
    onClick?: () => void;
    name?: string;
}

const NotificationItem:React.FC<PROPS> = ({name, onClick}) => {
    return (
        <button onClick={onClick} className="notif-item  text-dark">
            <img src={prof} alt="prof"  className='rounded'/>
            <span className='ps-2' >{name}</span>
        </button>
    )
}

export default NotificationItem
