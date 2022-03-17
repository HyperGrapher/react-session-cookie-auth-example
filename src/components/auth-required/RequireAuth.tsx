import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthStore from "stores/auth.store";
import styled from '@emotion/styled'

// fixes layout shift
const FixLayoutShift = styled.div`
    min-height: calc(80vh + 1px); 
`

const RequireAuth: React.FC = () => {
    const user = useAuthStore(store => store.user);
    const location = useLocation();

    return (user?.role === "store"
        ?
        <Outlet />
        : user?.id
            ? (
                <FixLayoutShift>
                    <Navigate to="/unauthorized" state={{ from: location }} replace />
                </FixLayoutShift>)
            :
            <FixLayoutShift><Navigate to="/login" state={{ from: location }} replace /></FixLayoutShift>
    );
}

export default RequireAuth;
