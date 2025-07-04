import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Global from "./pages/Global/Global";
import LayananCOVID19 from "./pages/LayananCovid19/LayananCovid19";
import About from "./pages/About/About";
import RumahSakit from "./pages/RumahSakit/RumahSakit"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="global" element={<Global />} />
        <Route path="LayananCovid19" element={<LayananCOVID19 />} />
        <Route path="about" element={<About />} />
        <Route path="RumahSakit" element={<RumahSakit />} />
      </Route>
    </Routes>
  );
}

export default App;
