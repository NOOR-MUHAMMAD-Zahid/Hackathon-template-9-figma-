import Image from "next/image";
import Head from "./Component/Head";
import HeroSec from "./Component/HeroSec";
import Experience from "./Component/Experience";
import About from "./Component/About";
import Extra from "./Component/extra";
import Menu from "./Component/Menu";
import Chef from "./Component/chef";
import Client from "./Component/Client";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

export default function Home() {
  return (
   <div className="bg-black">
     <Navbar />
     <Head />
     <About />
       <Experience />
       <Extra />
       <Menu />
       <Chef />
            <Client />
<Footer />
          
   </div>
  );
}