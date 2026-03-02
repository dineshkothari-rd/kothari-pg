import { siteConfig } from "../../config/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.phone}?text=Hello, I want enquiry about Kothari PG`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition flex items-center gap-2"
    >
      💬 WhatsApp
    </a>
  );
}
