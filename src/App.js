import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import News from "./components/News";

function App() {
  return (
    <>
      <Navbar mainTitle="NewsHub" subTitle1="About" />
      <News/>
      <Footer/>
    </>
  );
}

export default App;
