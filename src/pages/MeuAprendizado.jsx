import { useEffect } from "react";
import "./MeuAprendizado.css";


const MeuAprendizado = () => {
  useEffect(() => {
    const cssPath = "./MeuAprendizado.css"; 

    if (document.getElementById("curso-page-styles") || document.getElementById("curso-page-link")) {
      return;
    }

    fetch(cssPath, { method: "HEAD" })
      .then((resp) => {
        if (resp.ok) {
          const link = document.createElement("link");
          link.id = "curso-page-link";
          link.rel = "stylesheet";
          link.href = cssPath;
          document.head.appendChild(link);
        } else {
          const s = document.createElement("style");
          s.id = "curso-page-styles";
          document.head.appendChild(s);
          console.warn(`CursoPage: arquivo '${cssPath}' não encontrado — usando estilos embutidos (fallback).`);
        }
      })
      .catch(() => {
        const s = document.createElement("style");
        s.id = "curso-page-styles";
        document.head.appendChild(s);
        console.warn(`CursoPage: erro ao verificar '${cssPath}' — usando estilos embutidos (fallback).`);
      });
  }, []);

  return (
    <div className="curso-container">
      <aside className="sidebar">
        <h3>Conteúdo do Curso</h3>
        <ul>
          <li className="item selected">
            Sobre o curso <span>10min</span>
          </li>
          <li className="item">
            Primeiros Passos <span>25min</span>
          </li>
          <li className="item">
            Instalando o iTun Studio <span>25min</span>
          </li>
        </ul>

        <div className="module">
          <h4>2: Básico</h4>
          <p>1/6 | 1h</p>
        </div>

        <div className="module">
          <h4>3: Intermediário</h4>
          <p>1/6 | 1h</p>
        </div>

        <div className="module">
          <h4>4: Avançado</h4>
          <p>1/6 | 1h</p>
        </div>

        <div className="module">
          <h4>5: Conclusão</h4>
          <p>1/6 | 1h</p>
        </div>
      </aside>

      <main className="main-content">
        <div className="video-container">
          <img
            className="video-thumb"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="thumb"
          />
          <div className="video-overlay">
            <h2>02. Primeiros Passos</h2>
            <div className="play-button" />
          </div>
        </div>

        <div className="tabs">
          <button className="tab active">Visão Geral</button>
          <button className="tab">Dúvidas</button>
          <button className="tab">Avaliações</button>
        </div>

        <section className="sobre">
          <h3>Sobre o Curso</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis
            venenatis mattis. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Nullam fringilla et mi ut blandit.
            Ut mollis leo vel sollicitudin consectetur. Etiam at leo at turpis posuere
            fermentum.
          </p>
        </section>
      </main>
    </div>
  );
}

export default MeuAprendizado