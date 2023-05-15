import Message from "../../layouts/message";
import { useLocation } from "react-router-dom";
import style from "./Project.module.css";
import LinkButton from "../../layouts/LinkButton";
import Container from "../../layouts/Container";
import ProjectCard from "../../projects/ProjectCard";
import { useEffect, useState } from "react";
import Loading from "../../layouts/Loading";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 400);
  }, []);
  //delete
  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso! ");
      });
  }

  const location = useLocation();
  let message = "";
  if (location.state) message = location.state.message;

  //return
  return (
    <div className={style.project_container}>
      <div className={style.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Novo Projeto" />
      </div>
      <Container customClass="start">
        {message && <Message msg={message} type="success" />}
        {projectMessage && <Message msg={projectMessage} type="success" />}
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              name={project.name}
              id={project.id}
              category={project?.category?.name}
              budget={project.budget}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && <p>Não há projetos cadastrados</p>}
      </Container>
    </div>
  );
}
