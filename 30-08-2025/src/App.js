import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About.js";

function App() {
  return (
    <>
      <Navbar title="Test" aboutText="AboutUS" linkText="Link" />
      {/* <About /> */}
      <TextForm />
    </>
  );
}

export default App;
