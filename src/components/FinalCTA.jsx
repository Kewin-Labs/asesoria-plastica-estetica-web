import WhatsAppButton from "./WhatsAppButton.jsx";

export default function FinalCTA() {
  return (
    <section id="contacto" className="final-cta" aria-labelledby="final-title">
      <div className="container final-cta__inner reveal">
        <span className="final-cta__line" aria-hidden="true" />
        <h2 id="final-title" className="final-cta__title">
          Tu próximo paso comienza con <em>una conversación.</em>
        </h2>
        <p className="final-cta__text">
          Estamos aquí para orientarte y ayudarte a conocer nuestros servicios.
        </p>
        <WhatsAppButton size="lg" trackingLabel="final-cta">
          Hablar con un asesor por WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
