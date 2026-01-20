export default function IdentificationCard({
  informations = [],
  title,
  countryCode,
}) {
  return (
    <div className="identification-card">
      <div className="ic-upper">
        <h3>{title}</h3>
        <span>{countryCode}</span>
      </div>

      <div className="identification-information">
        {informations.map((info, i) => {
          return (
            <div
              className="identification-value"
              key={`IC-${title}-${i}-${info.title}`}
            >
              <div className="left">{info.title}</div>
              <div className="center">:</div>
              <div className="right">{info.val}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
