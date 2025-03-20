import Infomation from "./components/ui/Infomation";
import Service from "./components/ui/Service";
import ContactGroup from "./components/Contact";
import Calculator from "./components/ui/Calculator";
import Contact from "./components/ui/Contact";
import FeedBack from "./components/ui/Feedback";

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
