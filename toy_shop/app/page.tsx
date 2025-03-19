import Navbar from "@/pages/navbar/navbar";
import Specials from "@/pages/specials/specials";
import Picture from "@/pages/picture/picture";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Picture />
      <Specials />
    </div>
  );
}
