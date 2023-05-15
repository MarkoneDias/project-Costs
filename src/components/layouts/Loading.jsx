import style from "./Loading.module.css";
import loadingImg from "../../img/loading.svg";

function Loading() {
  return (
    <div className={style.loarder_container}>
      <img src={loadingImg} className={style.loader} alt="Loading" />
    </div>
  );
}
export default Loading;
