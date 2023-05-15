import Input from "../forms/inputs/input";
import Select from "../forms/select/select";
import SubmitBtn from "../forms/submitBtn/submitBtn";
import styles from "./ProjectForm.module.css";
import { useEffect, useState } from "react";

export default function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});
  //USEEFFECT
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function submit(e) {
    e.preventDefault();
    handleSubmit(project);
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type=" text"
        placeHolder="Insira o nome do projeto"
        name="name"
        text="Nome do Projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        placeHolder="Insira o orçamento total"
        name="budget"
        text="Orçamento do Projeto"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <div>
        <Select
          name="category_id"
          text="Selecione a categoria"
          options={categories}
          handleOnChange={handleCategory}
          value={project.category ? project.category.id : ""}
        />
      </div>
      <SubmitBtn text={btnText} />
    </form>
  );
}
