import Container from "../ui/Container";
import { siteConfig } from "../../config/site";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-sm text-blue-200">
              Affordable Boys PG in Siwani Mandi with AC & Food Included.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200 text-sm">
              <li>
                <a href="#rooms">Rooms</a>
              </li>
              <li>
                <a href="#facilities">Facilities</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-blue-200">📍 {siteConfig.location}</p>
            <p className="text-sm text-blue-200 mt-2">📞 +{siteConfig.phone}</p>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-10 pt-6 text-center text-sm text-blue-300">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
