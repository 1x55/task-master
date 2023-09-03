import Clients from "../components/Clients";
import Projetcs from "../components/Projects";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
 
export default function home() {
  return (
    <>
    <div className="d-flex gap-3 mb-4">
    <AddClientModal />
    <AddProjectModal />
    </div>
      <Projetcs />
      <hr />
      <Clients />
    </>
  )
}
