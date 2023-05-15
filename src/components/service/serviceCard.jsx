import { BsTrashFill } from "react-icons/bs";
import style from "../projects/ProjectCard.module.css";

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  };
  return (
    <div className={style.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>
      <p>{description}</p>
      <div className={style.project_card_action}>
        <button onClick={remove}>
          <BsTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
