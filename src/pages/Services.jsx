import "../styles/body/services.css";
import SectionHeader from "../components/SectionHeader";
import services from "../assets/data/services";
import Carousel from "../components/Carousel";

export default function Services() {
  return (
    <>
      <SectionHeader
        title="Our Services"
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
          "Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.",
        ]}
      />

      <Carousel data={services} />
    </>
  );
}
