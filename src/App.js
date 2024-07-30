// import logo from "./logo.svg";
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
        <h4>Welcome! John Doe</h4>

        <div className="dashboard">
          <VPark />
          <Statistics />
        </div>
        {/* Image component in the middle of the dashbord page */}
        <MidComponent />

        {/* Map content */}
        <Map />
      </section>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
