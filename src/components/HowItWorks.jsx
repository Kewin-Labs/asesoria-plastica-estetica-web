import WhatsAppButton from "./WhatsAppButton.jsx";

const steps = [
  { title: "Contacta con nuestro equipo", text: "Escríbenos por WhatsApp en el momento que prefieras." },
  { title: "Cuéntanos qué servicio deseas conocer", text: "Indícanos tu interés para orientarte mejor." },
  {
    title: "Recibe información y orientación",
    text: "Te explicamos los siguientes pasos, la disponibilidad y los precios.",
  },
  {
    title: "Solicita una valoración profesional",
    text: "Cuando corresponda, programamos una valoración con el profesional.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section how" aria-labelledby="how-title">
      <div className="container">
        <header className="section__head reveal">
          <p className="eyebrow">Cómo funciona</p>
          <h2 id="how-title" className="section__title">
            Cuatro pasos para empezar
          </h2>
        </header>

        <ol className="how__steps">
          {steps.map((s, i) => (
            <li key={s.title} className="how__step reveal">
              <span className="how__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="how__cta reveal">
          <WhatsAppButton size="lg" trackingLabel="how-it-works">
            Iniciar conversación
          </WhatsAppButton>
          <p className="how__note">La orientación inicial no sustituye la valoración profesional.</p>
        </div>
      </div>
    </section>
  );
}
