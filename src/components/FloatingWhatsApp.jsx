import { buildWhatsAppUrl } from "../utils/whatsapp.js";
import { trackWhatsAppClick } from "../utils/analytics.js";
import { WhatsAppIcon } from "./Icons.jsx";

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      className="fab-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      data-whatsapp="floating"
      onClick={() => trackWhatsAppClick("floating")}
    >
      <WhatsAppIcon width={28} height={28} />
    </a>
  );
}
