import React from "react";
import "./CSS/Index10Seventeen.css";
import automationImg from "./automationimg.png";

const AutomationSystem = () => {
  return (
    <div className="automation-wrapper">
      {/* LEFT IMAGE AREA */}
      <div className="automation-image-box">
        <img src={automationImg} alt="Automation and Electrical Equipment" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="automation-content">
        <div className="automation-number">
          <h1>17</h1>
          <h2>Automation and Electrical Equipment</h2>
        </div>

        <p>
         The <strong>automation and electrical control system</strong> forms the technological backbone of the biogas plant, ensuring safe, efficient, and continuous operation under all conditions. It provides <strong>real-time monitoring, intelligent process control, and automated safety management</strong> to maintain optimal performance while minimizing operational risks and energy consumption.
        </p>

        <p>
          In the event of an emergency — such as a power failure — the
          automation system immediately shifts the plant into{" "}
          <strong>safe operating mode</strong>, protecting critical components
          and maintaining process stability. Essential electrically powered
          systems are connected to <strong>emergency backup power</strong> to
          guarantee uninterrupted operation.
        </p>

        <p>
          The system enables{" "}
          <strong>
            real-time data acquisition, process regulation, and remote
            supervision
          </strong>
          , allowing operators to instantly detect, analyze, and correct any
          deviations. This helps optimize plant efficiency, conserve resources,
          reduce downtime, and generate a continuous electronic log of
          performance parameters for process evaluation and reporting.
        </p>

        <p>
          The <strong>automation infrastructure</strong> consists of a{" "}
          <strong>central control cabinet</strong>, sensor network, and
          execution devices for precise control of all technological processes.
        </p>

        <ul>
          <li>
            The control system is built around an{" "}
            <strong>industrial-grade Siemens CPU315-DP2 controller</strong>,
            integrated with the{" "}
            <strong>Simatic ET200S distributed I/O system</strong> and{" "}
            <strong>OP277 Touch operator panel</strong> featuring a responsive
            touch interface.
          </li>
          <li>
            Communication between system components is facilitated via{" "}
            <strong>PROFIBUS and MPI protocols</strong>, utilizing an{" "}
            <strong>RS-485 physical interface</strong> for reliable data
            transmission.
          </li>
          <li>
            The system operates on the{" "}
            <strong>Siemens Simatic Step7 software platform</strong>, providing
            advanced automation and customization capabilities.
          </li>
        </ul>

        <p>
          The <strong>modular control cabinet</strong> is divided into
          functional sections:
        </p>

        <ul>
          <li>
            The <strong>upper section</strong> houses the power supply, central
            processor, and front-end controller.
          </li>
          <li>
            The <strong>middle section</strong> accommodates the{" "}
            <strong>ET200S distributed I/O modules</strong> for sensor and
            actuator connectivity.
          </li>
          <li>
            The <strong>lower section</strong> contains{" "}
            <strong>interface relays and terminal blocks</strong> for connecting
            field devices and external equipment.
          </li>
        </ul>

        <p>
          This integrated automation framework allows the entire biogas plant to
          be{" "}
          <strong>
            operated and monitored efficiently by a single operator
          </strong>
          , ensuring high safety standards, operational reliability, and
          long-term performance optimization.
        </p>

        <div className="automation-specs">
          <h5 className="automation-spec-title">Specifications</h5>
          <p>Incoming control case with automatic set ASE-1, 2, 3 Base</p>
          <p>Siemens CPU315-DP2 controller Peripherals Simatic </p>
          <p>ET200S Control panel OP277 touchscreen Communication</p>
          <p>PROFIBUS and MPI Interface RS-485 Control system </p>
          <p>Simatic Step7 </p>
        </div>
      </div>
    </div>
  );
};

export default AutomationSystem;
