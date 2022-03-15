import ProjectList from "components/projects/ProjectList";
import useAuthStore from 'stores/auth.store'



const Projects = () => {

    const isAuth = useAuthStore(state => state.isAuth)

    return (
        <main className="container pt-5 height-overflow">
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


/*

            <Button onClick={() => setToast(val => !val)} className="mb-2">
                Toggle Toast <strong>with</strong> Animation
            </Button>

            <ToastNotification
                show={toast}
                title=""
                body=""
                onClose={() => setToast(false)} />

*/