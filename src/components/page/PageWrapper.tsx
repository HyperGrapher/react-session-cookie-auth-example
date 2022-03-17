import React, { ReactChild } from 'react';
import { Toaster } from 'react-hot-toast';
import styled from '@emotion/styled'

const ContentMain = styled.main`
    min-height: calc(80vh - var(--navbar-height) + 1px); 
    margin-top: var(--navbar-height); 
    animation: fadein 0.85s cubic-bezier(.03,.18,.11,.84);
    background-color:#eee;
`

type Props = {
    children: ReactChild;
}

const PageWrapper: React.FC<Props> = ({ children }) => (

    <ContentMain>
        {children}
        <>
            <Toaster containerStyle={{
                top: 60,
                left: 20,
                bottom: 20,
                right: 20,
            }} />
        </>
    </ContentMain>
)

export default PageWrapper;
