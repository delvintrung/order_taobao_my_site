import React from "react";

const Service = () => {
  return (
    <section id="service" className="w-full bg-gray-50 h-[500px]">
      <div className="px-20 pt-10 mt-10 ">
        <div className="flex justify-center items-center flex-col">
          <p className="text-xl font-bold">
            Tại sao cần đặt từ Trung Quốc về chứ không mua ở Việt Nam?
          </p>

          <div className="text-sm mt-2 text-left">
            <p>
              hâ 1. Giá cả: Giá cả ở Trung Quốc thường rẻ hơn so với ở Việt Nam{" "}
              <span className="bg-amber-400">từ 30% đến 50%.</span>
            </p>
            <br />
            <p>
              2. Đa dạng: Có rất nhiều mặt hàng ở Trung Quốc mà ở Việt Nam không
              có.
            </p>
            <br />
            <p>
              3. Chất lượng: Nếu bạn biết cách chọn hàng thì chất lượng hàng hóa
              ở Trung Quốc cũng rất tốt.
            </p>
            <br />
          </div>
        </div>
        <div className="flex justify-center items-center gap-[50px]">
          <div>Order hộ sáo dizi</div>
          <div>Order TaoBao</div>
        </div>
      </div>
    </section>
  );
};

export default Service;
