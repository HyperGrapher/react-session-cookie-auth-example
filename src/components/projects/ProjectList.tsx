import ProjectCard from "./ProjectCard"

const malist = ["1", "2", "3"]
const InstaList: React.FC = () => {
    return (
        <ul>
            {malist.map(val => <ProjectCard key={val} slug={val} />)}
            
        </ul>
    )
}


export default InstaList
