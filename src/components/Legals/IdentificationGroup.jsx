import IdentificationCard from "./IdentificationCard";
export default function IdentificationGroup({ data, isEven = false }) {
  return (
    <div className={`ic-wrapper${isEven ? " even-section" : null}`}>
      <div className="identification-group">
        {data.map((legal, i) => {
          return (
            <IdentificationCard
              title={legal.title}
              informations={legal.informations}
              countryCode={legal.countryCode}
              key={`IC-${i}-${legal.title}`}
            />
          );
        })}
      </div>
    </div>
  );
}
