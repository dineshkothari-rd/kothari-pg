import Container from "../ui/Container";

export default function Location() {
  return (
    <section className="py-10 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.8162858819173!2d75.61218137583838!3d28.903806875517624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913b16e66f7743d%3A0xa1475210c4988afa!2sKothari%20PG%20Hotal!5e0!3m2!1sen!2sin!4v1772465896427!5m2!1sen!2sin"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
}
