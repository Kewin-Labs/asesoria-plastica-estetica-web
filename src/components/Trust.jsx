import { UserIcon, CompassIcon, DocIcon, HandIcon } from "./Icons.jsx";

const attributes = [
  {
    icon: UserIcon,
    title: "Atención personalizada",
    text: "Escuchamos lo que buscas y te atendemos de forma individual.",
  },
  {
    icon: CompassIcon,
    title: "Orientación sobre los servicios",
    text: "Te explicamos las alternativas disponibles para que conozcas cada opción.",
  },
  {
    icon: DocIcon,
    title: "Información clara",
    text: "Resolvemos tus dudas sobre procesos, requisitos y pasos a seguir.",
  },
  {
    icon: HandIcon,
    title: "Acompañamiento",
    text: "Te acompañamos durante el proceso de atención, desde el primer contacto.",
  },
];

export default function Trust() {
  return (
    <section id="nosotros" className="section trust" aria-labelledby="trust-title">
      <div className="container">
        <header className="section__head section__head--center reveal">
          <p className="eyebrow">Nosotros</p>
          <h2 id="trust-title" className="section__title">
            Un acompañamiento pensado para ti
          </h2>
        </header>

        <ul className="trust__grid">
          {attributes.map(({ icon: Icon, title, text }) => (
            <li key={title} className="trust__item reveal">
              <span className="trust__icon">
                <Icon width={26} height={26} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
