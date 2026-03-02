import Container from "../ui/Container";

import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room4 from "../../assets/room4.jpg";
import room5 from "../../assets/room5.jpg";
import room6 from "../../assets/room6.jpg";

const images = [room1, room2, room3, room4, room5, room6];

export default function Gallery() {
  return (
    <section id="gallery" className="pt-10 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-lg">
              <img
                src={img}
                alt="AC Room at Kothari PG in Siwani Mandi"
                loading="lazy"
                className="w-full h-75 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
