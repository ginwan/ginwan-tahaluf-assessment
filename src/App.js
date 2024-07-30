// import logo from "./logo.svg";
import "./App.css";
import MidComponent from "./components/MidComponent/MidComponent";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <section className="dashboard-container">
        <h4>Welcome! John Doe</h4>
        {/* Image component in the middle of the dashbord page */}
        <MidComponent />
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
