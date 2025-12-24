import React from "react";
import "./CSS/Index3.css";

const SilagePreparation = () => {
    return (
        <section className="silage-section">
            {/* Header */}
            <div className="silage-header">
                <div className="silage-arrow-shape">
                    <svg className="arrow-svg" viewBox="0 0 120 180">
                        <polygon
                            points="0,0 84,0 120,90 84,180 0,180 36,90"
                            fill="#f2f2f2"
                            stroke="#e3262f"
                            strokeWidth="4"
                        />
                    </svg>
                </div>
                <div className="silage-header-text">
                    <h1>Silage Preparation</h1>
                    <h2>A Key Step Before Biogas Production</h2>
                </div>
            </div>

            {/* Content */}
            <div className="silage-content">
                {/* Left Column */}
                <div className="silage-left-content">
                    <p>
                        Before feeding <strong>Napier grass</strong> into a biogas plant, it
                        is strongly recommended to first store it in <strong>silage form</strong>.
                        Silage preparation offers multiple advantages and is considered a
                        best practice across all modern biogas technologies — not just at
                        <strong> GD Planet</strong>.
                    </p>

                    <h3>1. Prevents Floating and Operational Issues</h3>
                    <p>
                        Freshly harvested Napier grass contains a large amount of trapped
                        air. When such grass is directly added to the biogas reactor, it
                        tends to <strong>float</strong> on the surface instead of mixing
                        properly. This floating layer can cause{" "}
                        <strong>mechanical issues</strong>, such as damaging the reactor roof
                        or blocking gas pipelines.
                    </p>

                    <p>
                        During the <strong>silaging process</strong>, the grass is compacted
                        using tractors or other heavy equipment, which{" "}
                        <strong>removes the trapped air</strong> and ensures uniform, dense
                        feedstock suitable for digestion.
                    </p>
                </div>

                {/* Right Column */}
                <div className="silage-right-content">
                    <h3>2. Enhances Biogas Yield</h3>
                    <p>
                        Silaging naturally initiates <strong>acidification and hydrolysis</strong>,
                        breaking down complex plant materials into simpler compounds. This
                        pre-fermentation stage, driven by{" "}
                        <strong>lactic acid bacteria</strong>, can{" "}
                        <strong>increase biogas yield by 5–10%</strong>. The{" "}
                        <strong>minimum recommended silage period is 35 days</strong>,
                        allowing sufficient time for these beneficial microbial processes
                        to occur.
                    </p>

                    <h3>3. Ensures Continuous Feed Supply</h3>
                    <p>
                        Silage storage also provides a <strong>reliable feedstock reserve</strong>
                        during the rainy season or other periods when fresh harvesting is
                        not possible. Maintaining a steady silage supply allows the biogas
                        reactors to <strong>operate continuously</strong>, regardless of
                        weather or field conditions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SilagePreparation;
