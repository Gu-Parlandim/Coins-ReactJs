import { useNavigate } from "react-router-dom"
import ProjectForm from "../../Components/Forms/ProjectForm"
import PostMethod from "../../Components/RequestApi/PostMethod"
import styles from "./newproject.css"

function Newproject(){
    
    const navigate = useNavigate() 
   

    function createPost(projects) {
        projects.cost = 0
        projects.services = []
        PostMethod("projects", "POST", JSON.stringify(projects) )
        navigate("/projects")
        
    }

    return (
    <div className="newprojetc_container">
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços.</p>
        <ProjectForm handleSubmit={createPost} btnText="criar Projeto" />

    </div>

    )
}
export default Newproject