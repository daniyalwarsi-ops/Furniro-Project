import Navbar from "./Componant/Navbar";
import Hero from "./Componant/Hero";
import Browse from "./Componant/Browse";
import Products from "./Componant/Products"
import RoomInspiration from "./Componant/RoomInspiration";
import InstaGallery from "./Componant/InstaGallery";
import Footer from "./Componant/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Browse />
        <Products />
        <RoomInspiration />
        <InstaGallery />
      </main>
      <Footer />
    </>
  );
}
