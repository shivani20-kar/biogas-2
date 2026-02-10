import "./BiogasCogenerationCss/BiogascogenarationHowItWorks.css";

const BiogascogenarationHowItWorks = () => {
  return (
    <section className="biogascogenarationhowitworks">
      <div className="biogascogenarationhowitworks-container">
        {/* LEFT SIDE */}
        <div className="biogascogenarationhowitworks-left">
          <h2 className="biogascogenarationhowitworks-title">
            How a biogas
            <br />
            plant works
          </h2>

          <div className="biogascogenarationhowitworks-energy">
            <h4 className="biogascogenarationhowitworks-energy-title">
              Energy produced
            </h4>

            <div className="biogascogenarationhowitworks-energy-block">
              <strong>Electric power</strong>
              <p className="biogascogenarationhowitworks-network">to be sold to the network</p>
            </div>
            <div className="biogascogenarationhowitworks-energy-block">
              <strong>Thermal energy</strong>

              <p className="biogascogenarationhowitworks-energy-sub">
                for production of:
              </p>

              <ul className="ulsection">
                <li>hot water</li>
                <li>steam</li>
                <li>cold water</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="biogascogenarationhowitworks-right">
          <p>
            A biogas plant consists mainly of two parts: the anaerobic digestion part, where the actual production of biogas takes place (consisting of one or more digestors) and the transformation of biogas into energy part, i.e. the cogeneration plant.
          </p>

          <p>
           Biogas can be produced starting from different raw materials, such as livestock effluents, sludge from wastewater treatment plants, Organic Fraction of Municipal Solid Waste (OFMSW), agro-industrial waste and crop residues. The energy yield, in terms of biogas produced and therefore of electrical and thermal energy generated, varies according to the characteristics of the raw material chosen.
          </p>

          <p>
           Digestors play a key role in the initial phase of the biogas production process, but the energy efficiency and overall economic performance of the plant depend on the quality and reliability of the technological solutions that make up the cogeneration group.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BiogascogenarationHowItWorks;
