import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled'

const Unauthorized: React.FC = () => {

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<CenterChildDiv>
			<CenteredDiv>
				<h2>Yetkisiz Kullanıcı</h2>
				<p>Sayfayı görünütüleme izniniz bulunmuyor.</p>
				<div>
					<button className='goBack' onClick={goBack}>Geri git</button>
				</div>
			</CenteredDiv>
		</CenterChildDiv>

	)
}

export default Unauthorized

const CenterChildDiv = styled.div`
	min-height: calc(80vh - var(--navbar-height) ); 
	display: grid;
	place-content: center;
`

const CenteredDiv = styled.div`
	background-color: rgb(255, 255, 255);
	border: 1px solid rgb(230, 230, 230);
	padding: 2rem;
	text-align: center;
	& > h2, p { margin: 0; }
	& > h2{ color:rgb(85, 85, 85); font-size: 1.5rem;}
	p { margin: 1rem 0; font-size: .9rem;}
	button { margin-top: 0.75rem;}
	.goBack {
		background-color: transparent;
		border: 1px solid gray;
		padding: 8px 18px;
		&:hover {
			background-color: rgba(206, 206, 206, 0.103);
		}
	}
`