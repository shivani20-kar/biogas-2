// JSX: Tabs Component
import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/Tabs.css";

const Tabs = () => {
  return (
    <div className="sector-top-tabs">
      <span className="active">GD for Biogas Manufacturing</span>
      <span>GD for Advance Biofuel</span>
      <span>GD for Feed Stock</span>
      <span>GD for Biochemical & Fertilizers</span>
      <span>GD for Dairy</span>
    </div>
  );
};

export default Tabs;

