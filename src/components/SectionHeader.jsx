export default function SectionHeader({ title, paragraphs = [""] }) {
  return (
    <div className="page-header">
      <p className="page-title">{title}</p>
      <div className="page-title-description">
        {paragraphs.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
