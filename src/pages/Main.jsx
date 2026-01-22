import "../styles/body/main.css";
import ModelViewer from "../components/Main/ModelViewer";
import { useNavigate } from "react-router-dom";
import InterestedButton from "../components/InterestedButton";

export default function Main() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/about");
  }

  return (
    <>
      <div className="hero">
        <div className="transparent-layer">
          <div className="hero-text">
            <h1>WIDYA TECHNO ABADI</h1>
            <h3>
              "We are committed to being the best construction partner by
              prioritizing the safety of life above all else, maintaining
              uncompromising quality, and safeguarding the work environment to
              ensure the sustainability of industry in Indonesia."
            </h3>
            <InterestedButton
              onClick={handleClick}
              wrapperStyle={{
                justifyContent: "flex-start",
              }}
            >
              About Us
            </InterestedButton>
          </div>
          <div className="image-container">
            <ModelViewer
              modelPath="/model3d/scene.gltf"
              className="container3D"
            />
          </div>
        </div>
      </div>
    </>
  );
}
