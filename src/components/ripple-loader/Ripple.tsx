import styled from '@emotion/styled'

const Ripple: React.FC = () => {
    return (
        <FullPageOverlay>
            <div className="cent">
                <Ripples>
                    <div></div>
                    <div></div>
                </Ripples>
            </div>
        </FullPageOverlay>
    )
}

export default Ripple

const FullPageOverlay = styled.div`
    background-color: rgba(117, 117, 117, 0.25);
    height: 100%;
    width: 100%;
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;

    & > .cent {
        width: 15vw;
        height: 15vw; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
`



const Ripples = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;

    & div:nth-child(2) {animation-delay: -0.5s;}
    & div {
        position: absolute;
        border: 4px solid rgb(30, 92, 226);
        opacity: 1;
        border-radius: 50%;
        animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    @keyframes ripple {
	0% {
		top: 36px;
		left: 36px;
		width: 0;
		height: 0;
		opacity: 1;
	}
	100% {
		top: 0px;
		left: 0px;
		width: 72px;
		height: 72px;
		opacity: 0;
	}
}
`
