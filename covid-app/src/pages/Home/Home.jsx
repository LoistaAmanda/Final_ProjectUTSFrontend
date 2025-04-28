import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Dashboard from "../../components/Dashboard/Dashboard"; 

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Dashboard />{" "}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
