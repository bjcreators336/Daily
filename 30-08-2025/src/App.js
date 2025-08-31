import "./App.css";
import About from "./components/About.js";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import About from "./components/About.js";

function App() {
  return (
    <>
      <Navbar title="Test" aboutText="AboutUS" linkText="Link" />
      {/* <About /> */}
      <About />
      {/* <TextForm /> */}
    </>
  );
}

export default App;
