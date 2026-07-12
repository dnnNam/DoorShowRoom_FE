import { Outlet } from "react-router-dom";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default function HomeLayouts() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      {/* <ChatWidget /> */}
    </div>
  );
}
