// @ts-nocheck
import React, { ReactChild } from 'react';

type Props = {
    children: ReactChild;
}
const AnimatedPage: React.FC<Props> = ({ children }) => {


    return (
        <div className='fade-in'>
            {children}
        </div>
    )
}

export default AnimatedPage;
