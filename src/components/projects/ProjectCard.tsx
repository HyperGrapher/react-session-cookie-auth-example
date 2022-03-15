import avatar from 'images/profile1.jpeg'
import { Link } from 'react-router-dom'

type Props = {
    slug: string;
}
const ProjectCard: React.FC<Props> = ({ slug }) => {
    return (
        <li className="card">
            <div className="card-body">

                <img src={avatar} width={100} height={100} className="img-thumbnail rounded float-start me-3" alt="..." />
                <div className="ms-3">

                    <h5 className="card-title">
                        <Link className='nav-link text-muted' to={slug}>Proje Basligi</Link>
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">Mehmet D.<small className="text-muted"><span className='ms-2'>kullanici ismi</span>(marka ismi opsiyonel)</small></h6>
                    <p className="card-text">Influencer'lardan istenen paylasimlara dair detaylar... <Link className='text-muted ms-2' to={slug}>Daha fazla...</Link>
                    </p>
                </div>
            </div>
        </li>
    )
}

export default ProjectCard
