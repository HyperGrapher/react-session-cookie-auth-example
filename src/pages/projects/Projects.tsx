import ProjectList from "components/projects/ProjectList";
import useAuthStore from 'stores/auth.store'

const Projects: React.FC = () => {

    const isAuth = useAuthStore(state => state.isAuth)

    return (
        <main className="Projects container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="">
                        <div className="card height-overflow p-3">
                            <h5> {isAuth ? <span>Authenticated</span> : <span>Not Authenticated</span>}</h5>
                        </div>
                    </div>
                </div>

                <div className="col-sm-9">
                    <ProjectList />
                </div>

            </div>
        </main>
    )
}

export default Projects
