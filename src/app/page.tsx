import Image from "next/image";
import { Inter } from "next/font/google";
import Infomation from "./pages/Infomation/page";
import Service from "./pages/Service/page";
import ContactGroup from "./components/contact/page";

export default function Home() {
  return (
    <div className=" ">
      <main className="relative">
        <Infomation />
        <Service />
        <ContactGroup />
      </main>
    </div>
  );
}
