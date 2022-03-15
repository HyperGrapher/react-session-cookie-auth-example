import { Toast, ToastContainer } from "react-bootstrap"
import Logo from "/images/favicon-16x16.png"


type PROPS = {
    title: string;
    body: string;
    show: boolean;
    onClose: () => void;
}
const ToastNotification: React.FC<PROPS> = ({ title, body, show, onClose }) => {
    return (
        <ToastContainer className="p-3" position="bottom-end">

            <Toast show={show} onClose={onClose} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src={Logo}
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Inn-fluencer</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}

export default ToastNotification
