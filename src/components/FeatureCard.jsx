export default function FeatureCard({ title, text, img }) {
  return (
    <fieldset>
      <legend>
        <div className="feature-card__icon">
          <img src={img} alt="info-card" />
        </div>
      </legend>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{text}</p>
    </fieldset>
  );
}
