import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Categories from "./components/home-compo/Category";
import OffersSection from "./components/OffersSection";

export default function Home() {
  return (
    <div>

      <HeroBanner/>
      <Categories/>
      <OffersSection/>
    </div>
  );
}
