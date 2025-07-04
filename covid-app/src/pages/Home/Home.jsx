// import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
// import Footer from "../../components/Footer/Footer";
import Dashboard from "../../components/Dashboard/Dashboard";
import Layout from "../../components/Layout/Layout";
import HospitalList from "../../components/HospitalList/HospitalList"; // <-- Tambahkan ini

function Home() {
  return (
      <main>
        <About />
        <Dashboard />
      </main>
  );
}

export default Home;
