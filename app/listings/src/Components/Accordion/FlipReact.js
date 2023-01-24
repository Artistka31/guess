import React from "react";
import ReactCardFlip from "react-card-flip";
import Data from "./data.json";

const CardStyle = {
  border: "1px solid blue",
  padding: "10px",
  margin: "20px",
  width: "150px",
  height: "150px",
  textAlign: "center",
  fontFamily: "Damion",
};

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  // console.log(project);
  return (
    <div className="flip">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          style={CardStyle}
          onMouseEnter={() => setIsFlipped((prev) => !prev)}
          className="CardFront"
        >
          <div>
            <img src={project.img} alt="" id="img" />
          </div>
        </div>
        <div
          style={CardStyle}
          onMouseLeave={() => setIsFlipped((prev) => !prev)}
          className="CardBack"
        >
          <h4> {project.title} </h4>
        </div>
      </ReactCardFlip>
    </div>
  );
};

const Projects = () => {
  return (
    <div /* style={{ margin: "auto", width: "50%" }} */ className="Projects">
      {Data.map((item, index) => (
        <Card project={item} key={`card-${index}`} />
      ))}
    </div>
  );
};

export default Projects;
