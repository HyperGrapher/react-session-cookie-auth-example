import styled from '@emotion/styled'

const FooterStyled = styled.footer`
height: 20vh;
background-color: rgb(37, 37, 37);
color: rgb(192, 189, 189);
z-index: 9;
position: relative;
`

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <div className="container">
                <h5>Freelance Market</h5>
            </div>
        </FooterStyled>
    )
}

export default Footer