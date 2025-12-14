import ChatWidget from "@/components/Chatwidget";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export default function HomeLayouts() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ChatWidget />
    </div>
  );
}
