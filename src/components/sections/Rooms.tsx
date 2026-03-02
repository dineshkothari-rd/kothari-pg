import { siteConfig } from "../../config/site";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Rooms() {
  return (
    <section id="rooms" className="py-10 bg-white">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Room Options at {siteConfig.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {siteConfig.rooms.map((room, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg border ${
                room.highlight ? "border-emerald-500" : "border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{room.type}</h3>

              <p className="text-4xl font-bold text-blue-900 mb-6">
                ₹{room.price}
                <span className="text-base font-normal text-gray-500">
                  /month
                </span>
              </p>

              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✔ AC Included</li>
                <li>✔ Food Included</li>
                <li>✔ WiFi Available</li>
              </ul>

              <Button
                label="Enquire Now"
                onClick={() => (window.location.href = "#contact")}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
