import { useEffect, useState } from "react";
import Container from "../ui/Container";

export default function Contact() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/pghotel6@gmail.com", {
        method: "POST",
        body: formData,
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-10 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg"
            onChange={() => setStatus("")}
          />

          <input
            type="tel"
            name="Phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 border rounded-lg"
            onChange={() => setStatus("")}
          />

          <textarea
            name="Message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full p-3 border rounded-lg"
            onChange={() => setStatus("")}
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition cursor-pointer"
          >
            Send Enquiry
          </button>

          {status === "success" && (
            <p className="text-green-600 text-center transition-opacity duration-500">
              ✅ Enquiry sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-center transition-opacity duration-500">
              ❌ Something went wrong.
            </p>
          )}
        </form>
      </Container>
    </section>
  );
}
