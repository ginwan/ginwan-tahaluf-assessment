import "./statistics.css";
import totalViolation from "../../assets/total-violation.png";
import totalDistance from "../../assets/total-distance.png";
import totalDectations from "../../assets/total-dectations.png";
import activeVehciles from "../../assets/active-vehciles.png";
import ApexChart from "./Chart";

// Statistics Component
const Statistics = () => {
  return (
    <div className="statistics-container">
      {/* Chart component start */}
      <div className="chart-container">
        <span className="title">
          Active Vehicles Vs. In-Active Vehicles
          <div className="info">
            <div>
              <i class="ph-fill ph-square active"></i> Active Vehicles
            </div>
            <div>
              <i class="ph-fill ph-square in-active"></i> In-Active Vehicles
            </div>
          </div>
        </span>
        <div className="chart">
          <ApexChart />
        </div>
      </div>
      {/* Chart component end */}

      {/* insights cards component start */}
      <div className="insights">
        <div className="insight-card">
          <div className="card-items">
            <img src={totalViolation} alt="total violation" />
            <span>2,108</span>
            Total Violations
          </div>
          <div className="card-items">
            <img src={totalDectations} alt="total dectations" />
            <span>100,000</span>
            Total Detections
          </div>
          <div className="card-items">
            <img src={activeVehciles} alt="active vehciles" />
            <span>48</span>
            Total Active Vehicles
          </div>
          <div className="card-items">
            <img src={totalDistance} alt="total distance" />
            <span>50,000 km</span>
            Total Distance In KM
          </div>
        </div>
      </div>
      {/* insights cards component end */}
    </div>
  );
};

export default Statistics;
