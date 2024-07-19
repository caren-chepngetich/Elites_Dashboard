import React from 'react';
import BarGraph from './barGraph'; // Adjust path based on your project structure
import './index.css'; 
const AnalyticsPage = () => {
  return (
    <div className="analytics-page">
      <div className="graph-container">
        <BarGraph />
      </div>
      {/* Other content related to analytics page */}
    </div>
  );
};

export default AnalyticsPage;