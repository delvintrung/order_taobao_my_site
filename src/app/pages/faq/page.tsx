import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/app/components/ui/mobile/Contact";

const FAQ = () => {
  return (
    <div className="w-screen mt-25 h-dvh">
      <div>
        <p className="text-2xl font-bold text-center">
          {" "}
          Các câu hỏi thường gặp:
        </p>
      </div>
      <Accordion type="single" collapsible className="px-10 md:px-20">
        <AccordionItem value="item-1">
          <AccordionTrigger>Bạn có thể liên hệ tôi qua đâu?</AccordionTrigger>
          <AccordionContent>
            Nếu muốn nhanh chóng nhận được phản hồi, bạn có thể liên hệ qua
            Wechat hoặc Facebook của tôi
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Giá cho dịch vụ đặt hộ này là bao nhiêu?
          </AccordionTrigger>
          <AccordionContent>
            Đối với mặc hàng được đặt từ{" "}
            <Link href="https://www.taobao.com/">
              <div className="mx-2 items-center gap-1 inline-flex rounded-[4px] border border-orange-500">
                <Image
                  src="/alibaba.png"
                  alt=""
                  width={20}
                  height={20}
                  className=""
                />{" "}
                <p>TaoBao</p>
              </div>
            </Link>{" "}
            thì phí vận chuyển sẽ được tính theo kilogram (Thường giá khoảng 9
            tệ/kg), còn đối với các mặt hàng khác thì sẽ được tính theo giá trị
            đơn hàng (Thường là 5% giá trị đơn hàng). Nếu bạn có nhu cầu đặt
            hàng, hãy liên hệ với tôi qua Wechat hoặc Facebook để được báo giá
            cụ thể nhé.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Thời gian nhận được hàng là bao lâu?
          </AccordionTrigger>
          <AccordionContent>
            Do kiện hàng từ nước ngoài về nên khả năng sẽ mất nhiều thời gian
            hơn hàng trong nước. Bình thường cần khoảng một tuần thì hàng có thể
            về trên tay các bạn được rồi
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Nếu hàng có vấn đề muốn đổi trả thì sao?
          </AccordionTrigger>
          <AccordionContent>
            Các sản phẩm mua trên sàn đều có thể có lỗi từ nhà sản xuất hoặc quá
            trình vận chuyển, nếu có bất kỳ lỗi gì làm khách hàng không vừa ý
            thì hãy liên hệ với mình sớm nhất để được hỗ trợ đổi trả nhé. Mình
            sẽ hỗ trợ đổi trả trong vòng 7 ngày kể từ khi nhận hàng.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Tại sao giá nhân dân tệ có thể tăng 200-300đ cho một tệ?
          </AccordionTrigger>
          <AccordionContent>
            Vì nhân dân tệ mình cần phải đi mua tại bên trung gian nên sẽ bị
            tăng giá lên một ít. Hiểu đơn gian rằng mình không có sẵn nhân dân
            tệ mà mình cần phải đi đổi nhân dân tệ để thực hiện giao dịch giúp
            các bạn
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="px-10 mt-10 md:px-20">
        <p className=" text-base">
          Nếu có bất kỳ câu hỏi nào khác có thể liên hệ trực tiếp với tui để
          được hỗ trợ nhiệt tình nha.
        </p>
        <Contact />
      </div>
    </div>
  );
};

export default FAQ;
