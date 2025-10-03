import Infomation from "./components/ui/Infomation";
import Service from "./components/ui/Service";
import ContactGroup from "../components/Contact";
import Calculator from "./components/ui/Calculator";
import Contact from "./components/ui/Contact";
import FeedBack from "./components/ui/Feedback";
import { Metadata } from "next";
import TabsIntroduce from "../components/TabsIntroduce";

export const metadata: Metadata = {
  title: "Nhận Order Các Sản Phẩm Tại Trung Quốc | Trung Delvin",
  description: "Trang web chính thức của Trung Delvin",
};
export default function Home() {
  return (
    <div className="size-fit md:w-full">
      <main className="relative">
        <Infomation />
        <TabsIntroduce />
        <Service />
        <ContactGroup />
        <Calculator />
        <FeedBack />
        <Contact />
      </main>
    </div>
  );
}
