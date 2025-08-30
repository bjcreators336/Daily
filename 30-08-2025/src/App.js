import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Test" aboutText="AboutUS" linkText="Link" />
      <TextForm />
    </>
  );
}

export default App;
