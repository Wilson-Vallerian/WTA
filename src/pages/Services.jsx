import "../styles/body/services.css";
import SectionHeader from "../components/SectionHeader";
import services from "../assets/data/services";
import Carousel from "../components/Services/Carousel";
import InterestedButton from "../components/InterestedButton";

export default function Services() {
  return (
    <div>
      <SectionHeader
        title="Our Services"
        paragraphs={[
          "We provide comprehensive industrial engineering and construction services tailored to meet the demands of complex industrial projects.",
          "From engineering and procurement to construction, installation, and commissioning, our services are delivered with a strong focus on safety, quality, and efficiency.",
        ]}
      />

      <Carousel data={services} />

      <div className="even-section">
        <SectionHeader
          title="Feel Interested?"
          paragraphs={[
            "Looking for a reliable partner for your industrial project?",
            "Contact us today to discuss your requirements and discover how our expertise can support your project from planning to completion.",
          ]}
        />

        <InterestedButton onClick={() => console.log("CLICKED")}>
          Click Me
        </InterestedButton>
        <br />
      </div>
    </div>
  );
}
