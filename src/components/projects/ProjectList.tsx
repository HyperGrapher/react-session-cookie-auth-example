// @ts-nocheck
import ProjectCard from "./ProjectCard"

const InstaList = () => {
    return (
        <ul>
            {["p1", "p2", "p3"].map(val => <ProjectCard key={val} slug={val} />)}

        </ul>
    )
}


export default InstaList
