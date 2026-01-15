import React from "react";
import "./CSS/Index17.css";

const ImplementationTerms = () => {
  return (
    <section className="implementation-wrapper">
      <h1 className="implementation-title">
        Implementation terms and payment
      </h1>

      {/* ✅ SCROLL WRAPPER */}
      <div className="implementation-table-scroll">
        <table className="implementation-table">
          <thead>
            <tr>
              <th className="col-task">Months</th>
              {[...Array(14)].map((_, i) => (
                <th key={i} className="col-month">
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="task-name">Project documentation</td>
              <td className="fill">50%</td>
              <td className="fill">50%</td>
              {[...Array(12)].map((_, i) => (
                <td key={i}></td>
              ))}
            </tr>

            <tr>
              <td className="task-name">Approvals and permits</td>
              <td className="fill">100%</td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill"></td>
              {[...Array(10)].map((_, i) => (
                <td key={i}></td>
              ))}
            </tr>

            <tr>
              <td className="task-name">Equipment supply</td>
              <td className="fill">50%</td>
              <td className="fill">20%</td>
              <td className="fill">20%</td>
              <td className="fill"></td>
              <td className="fill">10%</td>
              {[...Array(9)].map((_, i) => (
                <td key={i}></td>
              ))}
            </tr>

            <tr>
              <td className="task-name">Biogas upgrading plant</td>
              <td className="fill">30%</td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill">70%</td>
              {[...Array(8)].map((_, i) => (
                <td key={i}></td>
              ))}
            </tr>

            <tr>
              <td className="task-name">Construction</td>
              <td className="fill">50%</td>
              <td className="fill"></td>
              <td className="fill">50%</td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill"></td>
              {[...Array(7)].map((_, i) => (
                <td key={i}></td>
              ))}
            </tr>

            <tr>
              <td className="task-name">Supervision</td>
              <td className="fill">50%</td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill">50%</td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill"></td>
              <td className="fill"></td>
              {[...Array(4)].map((_, i) => (
                <td key={i}></td>
              ))}
            </tr>

            <tr>
              <td className="task-name">Plant start-up</td>
              {[...Array(10)].map((_, i) => (
                <td key={i}></td>
              ))}
              <td className="fill">50%</td>
              <td className="fill"></td>
              <td className="fill">50%</td>
              <td className="fill"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ImplementationTerms;
