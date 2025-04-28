import Navbar from "../../components/Navbar/Navbar";
import Covid from "../../components/Covid/Covid";
import Footer from "../../components/Footer/Footer";
import Dashboard from "../../components/Dashboard/Dashboard"; 

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Covid />
        <Dashboard />{" "}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
