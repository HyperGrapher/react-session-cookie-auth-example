import { ReactChild } from "react";

type Props = {
    children: ReactChild;
}
const Page: React.FC<Props> = ({ children }) => {
    return (
        <div className="page container">
            {children}
        </div>
    )
}

export default Page