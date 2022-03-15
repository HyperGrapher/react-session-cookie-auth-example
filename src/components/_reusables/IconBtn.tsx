import sty from './style.module.scss'

type PROPS = {
    children: JSX.Element;
    onClick: () => void;
    notificationAlert?: boolean;
}

const IconBtn: React.FC<PROPS> = ({children, onClick, notificationAlert}) => {
    return (
        <button onClick={onClick} className={`${sty.svgBtn} text-muted ${sty.count}`}>
            {children}
            {notificationAlert && <span></span>}
        </button>
    )
}

export default IconBtn
