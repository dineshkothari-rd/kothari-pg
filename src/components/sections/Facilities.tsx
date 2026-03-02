import { siteConfig } from "../../config/site";
import Container from "../ui/Container";

export default function Facilities() {
  return (
    <section id="facilities" className="py-10 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Facilities at {siteConfig.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
            >
              <p className="text-lg font-semibold">{feature}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
