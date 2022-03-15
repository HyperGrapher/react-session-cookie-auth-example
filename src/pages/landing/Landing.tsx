import landingImage from 'images/meet2-clean1.png'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

    let navigate = useNavigate();

    return (
        <div className='container landing-page'>

            <header className='header-content pt-0 row d-flex align-items-center justify-content-between'>
                <div className='col-lg-6'>
                    <h1 className='display-4 h5'>Freelancer Platformuna </h1>
                    <h1 className='display-4 h5'> </h1>
                    <h1 className='display-4 h5 text-primary'>Sen de Katıl </h1>
                    <p className="lead display-6a">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptate dicta ex exercitationem dolore adipisci architecto deleniti, ea nostrum qui.
                    </p>
                    <div className="d-nonea d-flexas">
                        <div className='btn-group'>
                            <button onClick={() => navigate("/")} className="btn btn-primary btn-lg">Projelere Goz At</button>

                            <button onClick={() => navigate("/")} className="btn btn-success btn-lg">Profilinin Gucunu Gor</button>

                        </div>
                    </div>
                </div>

                <img className='col-lg-6 selector landing-img' src={landingImage} alt="profil" />
            </header>

        </div>
    )
}

export default Landing
