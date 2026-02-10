import "./BiogasCogenerationCss/BiogasCogenerationInfo.css";

const BiogasCogenerationInfo = () => {
  return (
    <section className="biogascogenerationinfo-section">
      <div className="biogascogenerationinfo-container">

        {/* LEFT SIDE */}
        <div className="biogascogenerationinfo-left">
          <h2 className="biogascogenerationinfo-title">
            Generation of renewable
            electrical and thermal
            energy through the
            utilization of organic
            residues.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="biogascogenerationinfo-right">
          <p>
            Biogas is a natural fuel produced through anaerobic digestion—a biological process in which microorganisms break down organic plant and animal residues in the absence of oxygen.
          </p>

          <p>
            Typically, biogas contains 50–70% methane, with the remainder primarily consisting of carbon dioxide and trace components. When properly processed, biogas can fuel the internal combustion engines of cogeneration plants, enabling the generation of fully renewable electricity and thermal energy.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BiogasCogenerationInfo;
