import { useId, useState } from "react";
import { faqs } from "../data/faq.js";
import { ChevronIcon } from "./Icons.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";

function FaqItem({ question, answer, isOpen, onToggle }) {
  const id = useId();
  return (
    <div className={`faq__item ${isOpen ? "is-open" : ""}`}>
      <h3 className="faq__q">
        <button
          type="button"
          id={`${id}-btn`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
        >
          <span>{question}</span>
          <ChevronIcon className="faq__chev" />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className="faq__a"
        hidden={!isOpen}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <header className="section__head reveal">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-title" className="section__title">
            Resolvemos tus dudas
          </h2>
          <p className="section__lead">¿No encuentras tu pregunta? Escríbenos y te orientamos.</p>
          <WhatsAppButton variant="outline" trackingLabel="faq">
            Preguntar por WhatsApp
          </WhatsAppButton>
        </header>

        <div className="faq__list reveal">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.question}
              {...f}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
