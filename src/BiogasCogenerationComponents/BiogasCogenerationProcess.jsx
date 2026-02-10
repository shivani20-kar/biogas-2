import "./BiogasCogenerationCss/BiogasCogenerationProcess.css";
import processDiagram from "./BiogasProcessimage.png";

const BiogasCogenerationProcess = () => {
  return (
    <section className="biogascogenerationprocess">
      <div className="biogascogenerationprocess-container">

        {/* DIAGRAM */}
        <div className="biogascogenerationprocess-diagram">
          <img
            src={processDiagram}
            alt="Biogas Cogeneration Process Diagram"
          />
        </div>

      </div>
    </section>
  );
};

export default BiogasCogenerationProcess;
