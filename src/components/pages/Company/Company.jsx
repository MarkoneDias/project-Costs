import styles from "../Home/Home.module.css";

export default function Company() {
  return (
    <section className={styles.home_container}>
      <h1>
        <span>Costs</span> Company
      </h1>
      <p>
        {" "}
        A Costs é uma empresa líder no setor de controle de orçamentos, fornecendo
        soluções inovadoras e inteligentes para ajudar indivíduos e organizações a
        alcançarem uma gestão financeira eficiente. Com sede em uma cidade global, a Costs
        se destaca como referência em seu campo, ajudando seus clientes a tomar decisões
        informadas e estratégicas para otimizar seus recursos financeiros. Comece a
        gerenciar os seus projetos agora mesmo!
      </p>
    </section>
  );
}
