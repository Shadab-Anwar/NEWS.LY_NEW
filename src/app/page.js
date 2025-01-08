import Api_Fetch from "./components/Api_Fetch";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";



export default function Home() {
  return (
    <>
    <Navbar/>
    <NewsCard/>
    <Footer/>
    <Api_Fetch/>
    </>
  );
}
