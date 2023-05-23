import { useState } from "react";
import Input from "../forms/inputs/input";
import SubmitBtn from "../forms/submitBtn/submitBtn";
import style from "../projects/ProjectForm.module.css";

function ServiceForm({ handleSubmit, textBtn, projectData }) {
  const [service, setService] = useState({});

  function handleChange(e) {
    setService({ ...service, [e.target.name]: [e.target.value] });
  }

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  return (
    <form onSubmit={submit} className={style.form}>
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeHolder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeHolder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeHolder="Dedscreva o serviço"
        handleOnChange={handleChange}
      />
      <SubmitBtn text={textBtn} />
    </form>
  );
}
export default ServiceForm;
