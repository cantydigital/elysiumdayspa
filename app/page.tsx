import BookingCta from "./components/BookingCta";
import FeaturedPackage from "./components/FeaturedPackage";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import Pillars from "./components/Pillars";
import Testimonial from "./components/Testimonial";
import Treatments from "./components/Treatments";
import Visit from "./components/Visit";
import VisitSteps from "./components/VisitSteps";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pillars />
      <Treatments />
      <FeaturedPackage />
      <VisitSteps />
      <Testimonial />
      <Offers />
      <Visit />
      <BookingCta />
    </main>
  );
}
