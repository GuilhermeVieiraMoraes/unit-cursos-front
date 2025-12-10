import styles from './Home.module.css';
import professional from '../assets/image14.png'

const Home = () => {
  return (
    <main class={styles.home}>
      <div class={styles.part}>
        <div class={styles.titulo}>
          <h1>Aprenda Habilidades, </h1>
          <h1>transforme seu futuro</h1>
        </div>
        <p>Cursos online com certificação, criados por especialistas e pensados para o mercado atual.</p>
        <button class={styles.button}>Inscreva-se</button>
      </div>

      <div class={styles.claro}>
        <div class={styles.top}>
          <div class={styles.content}>
            <h1 class={styles.title_dark}>Os melhores cursos para</h1>
            <h1 class={styles.title_dark}>impulsionar</h1>
            <h1 class={styles.title_accent}>sua carreira</h1>
            <p>Construa uma carreira sólida com cursos práticos e</p>
            <p>guiados por quem vive o que ensina.</p>
            <button class={styles.button}>Conheça os cursos</button>
          </div>
          <img src={professional} alt="Profissional" class={styles.img}/>
        </div>
        <div class={styles.cards}>
          <div class={styles.card}>
            <h1>🚀 Conteúdo Atualizado</h1>
            <p>Cursos criados por profissionais que estão atuando no mercado.</p>
          </div>
          <div class={styles.card}>
            <h1>🚀 Conteúdo Atualizado</h1>
            <p>Cursos criados por profissionais que estão atuando no mercado.</p>
          </div>
          <div class={styles.card}>
            <h1>🚀 Conteúdo Atualizado</h1>
            <p>Cursos criados por profissionais que estão atuando no mercado.</p>
          </div>
        </div>
      </div>

      <div class={styles.part}>
        <div class={styles.titulo}>
          <h1>Comece sua </h1>
          <h1>transformação hoje mesmo</h1>
          <p>Desenvolva novas habilidades e alcance o próximo nível da sua carreira com nossos cursos online.</p>
        </div>
        <button class={styles.button}>Começar teste grátis</button>
      </div>
    </main>
  )
}

export default Home