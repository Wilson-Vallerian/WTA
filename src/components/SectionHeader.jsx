export default function SectionHeader({ title, paragraphs = [""] }) {
  return (
    <div className="about-header">
      <p className="about-title">{title}</p>
      <div className="about-title-description">
        {paragraphs.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
