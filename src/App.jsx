import { useState } from 'react'

const courses = [
  {
    tag: 'Mais procurado',
    title: 'Ansiedade sob controle',
    description: 'Um caminho prático para compreender os gatilhos, acalmar a mente e recuperar sua rotina.',
    lessons: '12 videoaulas',
    duration: '4 semanas',
    category: 'Emoções',
    color: 'lavender',
    link: 'https://pay.hotmart.com/T108262482G?bid=1793364964545',
  },
  {
    tag: 'Autoconhecimento',
    title: 'Reconstruindo a autoestima',
    description: 'Exercícios e reflexões para fortalecer sua relação consigo e estabelecer limites mais saudáveis.',
    lessons: '10 videoaulas',
    duration: '3 semanas',
    category: 'Autoconhecimento',
    color: 'peach',
    link: 'https://hotmart.com/pt-br/marketplace',
  },
  {
    tag: 'Relacionamentos',
    title: 'Vínculos que fazem bem',
    description: 'Aprenda a se comunicar com clareza e a construir relações mais leves, seguras e conscientes.',
    lessons: '8 videoaulas',
    duration: '3 semanas',
    category: 'Relacionamentos',
    color: 'sage',
    link: 'https://hotmart.com/pt-br/marketplace',
  },
  {
    tag: 'Vida leve',
    title: 'Liberdade emocional',
    description: 'Reconheça padrões repetitivos e desenvolva recursos para fazer escolhas com mais consciência.',
    lessons: '9 videoaulas',
    duration: '3 semanas',
    category: 'Emoções',
    color: 'sage',
    link: 'https://hotmart.com/pt-br/marketplace',
  },
  {
    tag: 'Prático',
    title: 'Limites sem culpa',
    description: 'Aprenda a dizer não, comunicar suas necessidades e preservar sua energia nas relações.',
    lessons: '7 videoaulas',
    duration: '2 semanas',
    category: 'Relacionamentos',
    color: 'lavender',
    link: 'https://hotmart.com/pt-br/marketplace',
  },
  {
    tag: 'Jornada guiada',
    title: 'Volte para você',
    description: 'Uma experiência de autocuidado para retomar prioridades e construir uma rotina possível.',
    lessons: '14 videoaulas',
    duration: '4 semanas',
    category: 'Autoconhecimento',
    color: 'peach',
    link: 'https://hotmart.com/pt-br/marketplace',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 7.5v9l7-4.5-7-4.5Z" />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Todos')
  const filteredCourses = activeCategory === 'Todos'
    ? courses
    : courses.filter((course) => course.category === activeCategory)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Dra. Emanuela Aguiar — início">
          <span className="brand-mark">M</span>
          <span>
            <strong>Dra. Emanuela Aguiar</strong>
            <small>Psicologia & desenvolvimento</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
          <a href="#cursos" onClick={closeMenu}>Cursos</a>
          <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
          <a href="#como-funciona" onClick={closeMenu}>Como funciona</a>
          <a className="nav-login" href="https://consumer.hotmart.com/" target="_blank" rel="noreferrer">
            Acessar meus cursos <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">Psicologia para a vida real</span>
            <h1>Transforme sua relação com <em>você mesma.</em></h1>
            <p>
              Cursos online para quem deseja compreender suas emoções, fortalecer a autoestima e viver com mais leveza.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#cursos">Conheça os cursos <ArrowIcon /></a>
              <a className="text-link" href="#como-funciona">Veja como funciona</a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                <span>AC</span><span>LM</span><span>RS</span>
              </div>
              <p><strong>+2.500 alunas</strong><br />já começaram essa jornada</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-frame">
              <img
                src="https://images.unsplash.com/photo-1758523669942-1a32fcf29637?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200"
                alt="Psicóloga em um ambiente acolhedor"
              />
            </div>
            <div className="floating-note">
              <span className="note-icon">“</span>
              <p>Você não precisa dar conta de tudo sozinha.</p>
            </div>
            <span className="decorative-circle" />
          </div>
        </section>

        <section className="benefit-strip" aria-label="Benefícios dos cursos">
          <div><strong>Acesso imediato</strong><span>Comece assim que se inscrever</span></div>
          <div><strong>Estude no seu ritmo</strong><span>No celular, tablet ou computador</span></div>
          <div><strong>Material de apoio</strong><span>Exercícios para aplicar no dia a dia</span></div>
          <div><strong>Suporte próximo</strong><span>Orientação durante sua jornada</span></div>
        </section>

        <section className="courses section" id="cursos">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Aprenda no seu ritmo</span>
              <h2>Cursos para o seu momento</h2>
            </div>
            <p>Conteúdos baseados em psicologia, traduzidos de forma simples, cuidadosa e aplicável à sua rotina.</p>
          </div>

          <div className="course-filters" aria-label="Filtrar cursos por tema">
            {['Todos', 'Emoções', 'Autoconhecimento', 'Relacionamentos'].map((category) => (
              <button
                type="button"
                className={activeCategory === category ? 'filter-active' : ''}
                onClick={() => setActiveCategory(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="course-grid">
            {filteredCourses.map((course, index) => (
              <article className="course-card" key={course.title}>
                <div className={`course-cover ${course.color}`}>
                  <span className="course-number">0{index + 1}</span>
                  <span className="course-pill">{course.tag}</span>
                  <div className="cover-shape" />
                  <span className="play"><PlayIcon /></span>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span>{course.lessons}</span>
                    <span>{course.duration}</span>
                  </div>
                  <a href={course.link} target="_blank" rel="noreferrer">
                    Conhecer o curso <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process section" id="como-funciona">
          <div className="process-intro">
            <span className="eyebrow">Simples e seguro</span>
            <h2>Uma experiência pensada para caber na sua rotina.</h2>
            <p>
              Escolha sua jornada, faça sua inscrição em ambiente protegido e tenha acesso às aulas e materiais em poucos minutos.
            </p>
            <a className="button button-light" href="https://consumer.hotmart.com/" target="_blank" rel="noreferrer">
              Já sou aluna <ArrowIcon />
            </a>
          </div>
          <ol className="steps">
            <li><span>01</span><div><h3>Escolha seu curso</h3><p>Encontre o conteúdo que mais combina com o seu momento.</p></div></li>
            <li><span>02</span><div><h3>Faça sua inscrição</h3><p>Conclua o pagamento em um ambiente protegido e confiável.</p></div></li>
            <li><span>03</span><div><h3>Assista onde quiser</h3><p>Receba seu acesso e acompanhe as aulas pelo celular ou computador.</p></div></li>
          </ol>
        </section>

        <section className="testimonials section">
          <div className="section-heading">
            <div><span className="eyebrow">Histórias reais</span><h2>Quem começou, recomenda</h2></div>
            <p>Pequenas mudanças ganham força quando você encontra orientação e respeita o seu próprio tempo.</p>
          </div>
          <div className="testimonial-grid">
            <blockquote>
              <p>“As aulas são acolhedoras e muito práticas. Hoje consigo reconhecer minha ansiedade antes que ela tome conta do meu dia.”</p>
              <footer><strong>Ana C.</strong><span>Aluna há 6 meses</span></footer>
            </blockquote>
            <blockquote>
              <p>“Parecia que a Emanuela estava conversando comigo. Aprendi a colocar limites sem me sentir uma pessoa ruim.”</p>
              <footer><strong>Juliana M.</strong><span>Aluna do curso Limites sem culpa</span></footer>
            </blockquote>
            <blockquote>
              <p>“Consigo assistir no meu tempo e voltar às práticas sempre que preciso. Foi um investimento importante em mim.”</p>
              <footer><strong>Renata S.</strong><span>Aluna há 1 ano</span></footer>
            </blockquote>
          </div>
        </section>

        <section className="faq section" id="duvidas">
          <div className="faq-intro">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2>Antes de começar</h2>
            <p>Se ainda precisar de ajuda, fale com nossa equipe pelo WhatsApp.</p>
          </div>
          <div className="faq-list">
            <details><summary>Por quanto tempo tenho acesso ao curso?</summary><p>O período de acesso é informado na página de cada curso antes da inscrição.</p></details>
            <details><summary>Posso assistir pelo celular?</summary><p>Sim. As aulas podem ser acessadas pelo celular, tablet ou computador com internet.</p></details>
            <details><summary>Recebo material de apoio?</summary><p>Sim. Cada jornada inclui exercícios e materiais complementares para aprofundar o aprendizado.</p></details>
            <details><summary>Os cursos substituem a terapia?</summary><p>Não. Os conteúdos são educativos e não substituem acompanhamento psicológico individual.</p></details>
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="about-card">
            <span className="eyebrow">Quem vai te acompanhar</span>
            <h2>Olá, eu sou a Emanuela.</h2>
            <p>
              Psicóloga clínica há mais de 10 anos, especialista em Terapia Cognitivo-Comportamental e apaixonada por tornar o cuidado emocional mais acessível.
            </p>
            <p>
              Criei estes cursos para compartilhar ferramentas que uso no consultório de um jeito acolhedor, responsável e próximo da vida real.
            </p>
            <div className="credentials">
              <span><strong>10+</strong> anos de experiência</span>
              <span><strong>2.500+</strong> alunas</span>
              <span><strong>CRP</strong> 00/00000</span>
            </div>
          </div>
          <blockquote>
            “Cuidar de si não é egoísmo. É o começo de uma vida com mais presença, escolhas e verdade.”
          </blockquote>
        </section>

        <section className="final-cta section">
          <span className="eyebrow">Seu próximo passo pode ser leve</span>
          <h2>Comece hoje a cuidar de quem estará com você por toda a vida: você.</h2>
          <a className="button button-primary" href="#cursos">Quero conhecer os cursos <ArrowIcon /></a>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark">M</span>
          <span><strong>Dra. Emanuela Aguiar</strong><small>Psicologia & desenvolvimento</small></span>
        </div>
        <p>Conteúdo educativo. Não substitui acompanhamento psicológico individual.</p>
        <div>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://consumer.hotmart.com/" target="_blank" rel="noreferrer">Área do aluno</a>
        </div>
      </footer>

      <a
        className="whatsapp-button"
        href="https://wa.me/5500000000000?text=Olá,%20quero%20saber%20mais%20sobre%20os%20cursos."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a equipe pelo WhatsApp"
      >
        <span>Fale com a equipe</span>
        <strong>WA</strong>
      </a>
    </div>
  )
}
