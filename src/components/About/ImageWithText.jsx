export default function ImageWithText({
  img,
  imgLeft = true,
  alt,
  paragraphs = [""],
}) {
  return (
    <div className="about-section">
      {imgLeft ? <img src={img} alt={alt} /> : null}

      <div className="image-description">
        {paragraphs.map((paragraph, i, arr) => {
          return (
            <div key={`image-with-text-${i}`}>
              <p>{paragraph}</p>
              {i === arr.length - 1 ? "" : <br />}
            </div>
          );
        })}
      </div>

      {imgLeft ? null : <img src={img} alt={alt} />}
    </div>
  );
}
