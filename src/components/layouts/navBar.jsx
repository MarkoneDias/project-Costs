import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./navBar.module.css";
import logo from "../../img/costs_logo.png";

export default function () {
  return (
    <nav className={styles.navBar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/ ">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
