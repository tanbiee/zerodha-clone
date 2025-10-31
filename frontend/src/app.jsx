import { Outlet } from "react-router-dom";
import Navbar from "./landing_page/navbar/Navbar"; // adjust path to your Navbar

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* 👈 all child pages render here */}
      </main>
    </>
  );
}
