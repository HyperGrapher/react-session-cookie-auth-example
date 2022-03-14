// @ts-nocheck
import { Link } from 'react-router-dom'
import avatar from '../../images/myprofile.jpeg'

type Props = {
    slug: string;
}
const ProjectCard: React.FC<Props> = ({ slug }) => {
    return (
        <li className="card">
            <h1> {slug} </h1>
        </li>
    )
}

export default ProjectCard
