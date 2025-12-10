import './Cursos.css';

const Cursos = () => {
  const cursos = [
    {
        id: 1,
        categoria: 'Design',
        titulo: 'Curso UI/UX completo',
        descricao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
        progresso: '72%',
        img: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 2,
        categoria: 'Design',
        titulo: 'Curso UI/UX completo',
        descricao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
        progresso: '48%',
        img: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=60'
    },
    {
        id: 3,
        categoria: 'Design',
        titulo: 'Curso UI/UX completo',
        descricao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
        progresso: '92%',
        img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=60'
    }
];


const Card = ({ curso }) => (
    <article className="card" key={curso.id}>
    <img src={curso.img} alt={curso.titulo} />
    <div className="chip">{curso.categoria}</div>
    <div className="title">{curso.titulo}</div>
    <div className="desc">{curso.descricao}</div>
    <div className="row">
        <div className="progress">{curso.progresso}</div>
        <a href="#" className="link" aria-label={`Continuar ${curso.titulo}`}>
        Continuar →
        </a>
    </div>
    </article>
);


return (
    <div className="pagina-cursos-root">
        <section className="section">
            <h1>Meus Cursos</h1>
            <div className="grid">
            {cursos.map((c) => (
            <Card key={c.id} curso={c} />
            ))}
            </div>
        </section>


        <section className="section">
            <h1>Com base nos seus interesses</h1>
            <div className="grid">
            {cursos.map((c) => (
            <Card key={`rec-${c.id}`} curso={c} />
            ))}
            </div>
        </section>
    </div>
);
}

export default Cursos