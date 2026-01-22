import FeatureCard from "../components/About/FeatureCard";
import ImageWithText from "../components/About/ImageWithText";
import SectionHeader from "../components/SectionHeader";
import whyChooseUs from "../assets/data/whyChooseUs.js";
import "../styles/body/about.css";

export default function About() {
  return (
    <>
      <SectionHeader
        title="About Us"
        paragraphs={[
          "We are an industrial engineering and construction company delivering reliable, high-quality solutions for complex industrial projects.",
          "With a strong focus on safety, technical excellence, and client satisfaction, we support our customers from initial planning through execution and commissioning.",
        ]}
      />

      <ImageWithText
        imgLeft={true}
        img="/img_epc_03.jpg"
        alt="Industrial Engineering & Construction"
        paragraphs={[
          "As a full-service provider, we specialize in boiler installation, plant setup, and complex EPC projects across heavy industrial environments. Our experienced teams deliver safe, reliable, and high-performance solutions tailored to each project.",
          "Through integrated planning, disciplined execution, and rigorous quality control, we ensure projects are completed on schedule and to the highest standards—from initial consultation through final commissioning.",
        ]}
      />

      <div className="even-section">
        <SectionHeader
          title="Why Choose Us"
          paragraphs={[
            "We deliver reliable industrial solutions backed by experience, technical expertise, and a strong commitment to safety and quality.",
            "Our team works closely with clients from planning to completion, ensuring every project is executed efficiently, on schedule, and in full compliance with industry standards.",
          ]}
        />

        <div className="feature-card">
          <div className="feature-card-row">
            {whyChooseUs.map((reason, i) => {
              return (
                <FeatureCard
                  key={`about-${i}-${reason.title}`}
                  title={reason.title}
                  text={reason.text}
                  img={reason.image}
                />
              );
            })}
          </div>
        </div>

        <br />
      </div>
    </>
  );
}
