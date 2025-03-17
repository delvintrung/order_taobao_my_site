import Infomation from "./pages/Infomation/page";
import Service from "./pages/Service/page";
import ContactGroup from "./components/contact/page";
import Calculator from "./pages/Calculator/page";
import Contact from "./pages/Contact/page";
import FeedBack from "./pages/Feedback/page";

export default function Home() {
  return (
    <div className=" ">
      <main className="relative">
        <Infomation />
        <Service />
        <ContactGroup />
        <Calculator />
        <FeedBack />
        <Contact />
      </main>
    </div>
  );
}
