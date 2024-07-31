import "./App.css";
import Map from "./components/Map/Map";
import MidComponent from "./components/MidComponent/MidComponent";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Statistics from "./components/Statistics/Statistics";
import VPark from "./components/VPark/VPark";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <section className="dashboard-container">
        <h4 className="welcome">Welcome! Ginwan</h4>

        {/* Vpark ,Statistics and insights components */}
        <div className="dashboard">
          <VPark />
          <Statistics />
        </div>

        {/* Image component in the middle of the dashbord page */}
        <MidComponent />

        {/* Map component */}
        <Map />
      </section>
    </div>
  );
}

export default App;
