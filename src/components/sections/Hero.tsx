import Container from "../ui/Container";
import Button from "../ui/Button";
import heroImage from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <Container className="relative text-center z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Premium Boys PG in <br /> Siwani Mandi
        </h2>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          AC Rooms • Food Included • Starting at ₹7500/month
        </p>

        <Button
          label="Enquire Now"
          onClick={() => (window.location.href = "#contact")}
        />
      </Container>
    </section>
  );
}
